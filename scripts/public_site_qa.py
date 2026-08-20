#!/usr/bin/env python3
from __future__ import annotations
import json, sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
ROOT=Path(__file__).resolve().parents[1]
HTML_FILES=[ROOT/'index.html',ROOT/'glossary.html',ROOT/'customer.html']
REQUIRED_FILES=[ROOT/'PRIVACY.md',ROOT/'TERMS.md',ROOT/'SECURITY.md',ROOT/'DISCLAIMER.md',ROOT/'IP_POLICY.md',ROOT/'NOTICE',ROOT/'docs'/'PUBLIC_PRIVATE_BOUNDARY.md',ROOT/'docs'/'OPERATIONS_GOVERNANCE.md',ROOT/'docs'/'BUSINESS_SERVICES_AND_PRICING.md',ROOT/'docs'/'MEASUREMENT_AND_TREASURY_MODEL.md',ROOT/'docs'/'VERIFIED_BUSINESS_NETWORK.md',ROOT/'docs'/'ACCESS_AND_PRIVILEGE_MODEL.md']
class LinkParser(HTMLParser):
 def __init__(self): super().__init__(); self.links=[]; self.ids=set()
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'): self.ids.add(a['id'])
  if tag in {'a','link','script'}:
   v=a.get('href') if tag!='script' else a.get('src')
   if v:self.links.append(v)
def check_html(path,failures):
 text=path.read_text(encoding='utf-8'); p=LinkParser(); p.feed(text)
 if '<html' not in text.lower() or '</html>' not in text.lower(): failures.append(f'{path.name}: missing html root tags')
 for link in p.links:
  u=urlparse(link)
  if u.scheme in {'http','https','mailto','tel'} or link.startswith('//'):continue
  if link.startswith('#'):
   if link[1:] and link[1:] not in p.ids:failures.append(f'{path.name}: missing fragment target {link}')
   continue
  if u.path and not (path.parent/u.path).resolve().exists():failures.append(f'{path.name}: missing local target: {link}')
def main():
 failures=[]
 for f in REQUIRED_FILES:
  if not f.exists():failures.append(f'missing required file: {f.relative_to(ROOT)}')
 for f in HTML_FILES:
  if not f.exists():failures.append(f'missing HTML file: {f.name}')
  else:check_html(f,failures)
 try:
  d=json.loads((ROOT/'data'/'terms.json').read_text(encoding='utf-8'))
  if not isinstance(d.get('terms'),list):failures.append('data/terms.json: terms must be a list')
 except Exception as e:failures.append(f'data/terms.json invalid: {e}')
 customer=(ROOT/'customer.html').read_text(encoding='utf-8') if (ROOT/'customer.html').exists() else ''
 if 'maxlength="100"' not in customer:failures.append('customer.html: post limit must be 100 characters')
 for word in ['Like','Comment','Reply','Follower count']:
  if f'>{word}<' in customer:failures.append(f'customer.html: forbidden engagement action {word}')
 if 'data-share-button' not in customer or 'data-preview-share' not in customer:failures.append('customer.html: share-only controls missing')
 if 'pine-logo' not in customer or 'Verified business' not in customer:failures.append('customer.html: magenta pine verified identity missing')
 for marker in ['Business discovery','Team controls','Export & reporting','Pricing & promotion']:
  if marker not in customer:failures.append(f'customer.html: missing business feature {marker}')
 access=(ROOT/'docs'/'ACCESS_AND_PRIVILEGE_MODEL.md').read_text(encoding='utf-8') if (ROOT/'docs'/'ACCESS_AND_PRIVILEGE_MODEL.md').exists() else ''
 for marker in ['BASIC USE','PRIVILEGED USE','Default-deny rule','Treasury Approver']:
  if marker not in access:failures.append(f'access model: missing control {marker}')
 for f in [ROOT/'robots.txt',ROOT/'sitemap.xml']:
  if not f.exists():failures.append(f'missing {f.name}')
 if failures:
  print('PUBLIC SITE QA FAILED'); [print('-',x) for x in failures]; return 1
 print('PUBLIC SITE QA PASSED'); print('Checked pages, commercial docs, pine verification, business benefits, basic/privileged access controls, share-only posts, glossary JSON, robots and sitemap.'); return 0
if __name__=='__main__':sys.exit(main())
