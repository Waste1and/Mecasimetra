#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [ROOT / "index.html", ROOT / "glossary.html"]
REQUIRED_FILES = [
    ROOT / "PRIVACY.md",
    ROOT / "TERMS.md",
    ROOT / "SECURITY.md",
    ROOT / "DISCLAIMER.md",
    ROOT / "IP_POLICY.md",
    ROOT / "NOTICE",
    ROOT / "docs" / "PUBLIC_PRIVATE_BOUNDARY.md",
    ROOT / "docs" / "OPERATIONS_GOVERNANCE.md",
]


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[str] = []
        self.ids: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)
        if attrs_dict.get("id"):
            self.ids.add(attrs_dict["id"] or "")
        if tag in {"a", "link", "script"}:
            value = attrs_dict.get("href") if tag != "script" else attrs_dict.get("src")
            if value:
                self.links.append(value)


def fail(message: str, failures: list[str]) -> None:
    failures.append(message)


def check_html(path: Path, failures: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    parser = LinkParser()
    try:
        parser.feed(text)
    except Exception as exc:
        fail(f"{path.name}: HTML parse failed: {exc}", failures)
        return

    if "<html" not in text.lower() or "</html>" not in text.lower():
        fail(f"{path.name}: missing html root tags", failures)

    for link in parser.links:
        parsed = urlparse(link)
        if parsed.scheme in {"http", "https", "mailto", "tel"} or link.startswith("//"):
            continue
        if link.startswith("#"):
            fragment = link[1:]
            if fragment and fragment not in parser.ids:
                fail(f"{path.name}: missing fragment target #{fragment}", failures)
            continue

        relative_path = parsed.path
        if not relative_path:
            continue
        target = (path.parent / relative_path).resolve()
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            fail(f"{path.name}: link escapes repository: {link}", failures)
            continue
        if not target.exists():
            fail(f"{path.name}: missing local target: {link}", failures)


def main() -> int:
    failures: list[str] = []

    for required in REQUIRED_FILES:
        if not required.exists():
            fail(f"missing required trust/governance file: {required.relative_to(ROOT)}", failures)

    for html_file in HTML_FILES:
        if not html_file.exists():
            fail(f"missing HTML file: {html_file.name}", failures)
        else:
            check_html(html_file, failures)

    terms = ROOT / "data" / "terms.json"
    try:
        data = json.loads(terms.read_text(encoding="utf-8"))
        if not isinstance(data.get("terms"), list):
            fail("data/terms.json: terms must be a list", failures)
        metadata = data.get("metadata", {})
        if metadata.get("company") != "Mecasimetra Systems & Kappology":
            fail("data/terms.json: company metadata is inconsistent", failures)
    except Exception as exc:
        fail(f"data/terms.json: invalid JSON: {exc}", failures)

    robots = ROOT / "robots.txt"
    sitemap = ROOT / "sitemap.xml"
    if not robots.exists():
        fail("missing robots.txt", failures)
    if not sitemap.exists():
        fail("missing sitemap.xml", failures)

    if failures:
        print("PUBLIC SITE QA FAILED")
        for item in failures:
            print(f"- {item}")
        return 1

    print("PUBLIC SITE QA PASSED")
    print(f"Checked {len(HTML_FILES)} HTML files, {len(REQUIRED_FILES)} required trust/governance files, glossary JSON, robots.txt, and sitemap.xml.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
