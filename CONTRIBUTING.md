# Contributing to the Kappology Knowledge Graph

Thank you for your interest in extending the Mecasimetra / Kappology glossary. The knowledge graph is designed to grow with the community while maintaining formal rigour.

## How to add or update a term

All terms live in [`data/terms.json`](data/terms.json). Each term follows a strict schema — contributions that do not match the schema will not be merged.

### Term schema

```json
{
  "id": "your-term-id",
  "symbol": "X",
  "label": "Human-Readable Term Name",
  "short": "One-sentence summary (displayed in the term list).",
  "definition": "Full paragraph-length definition. Be precise and formal.",
  "parents": ["parent-term-id"],
  "related": ["related-term-id"],
  "formula": "Optional formula string, or null",
  "category": "one-of-the-categories-below"
}
```

### Field rules

| Field        | Rules |
|-------------|-------|
| `id`        | Lowercase, hyphen-separated, unique. e.g. `hazard-rate` |
| `symbol`    | Unicode symbol or short abbreviation. e.g. `λ`, `β_c` |
| `label`     | Full display name. May include `—` for subheadings. |
| `short`     | One sentence, under 120 characters. No trailing period is fine. |
| `definition`| One or more paragraphs. Formal and precise. |
| `parents`   | Array of existing term IDs that this term is derived from. Empty array `[]` for root concepts. |
| `related`   | Array of term IDs for associated (non-ancestor) concepts. |
| `formula`   | LaTeX-style or plain text formula string, or `null`. |
| `category`  | See categories below. |

### Categories

| Value         | Meaning |
|---------------|---------|
| `foundation`  | Root/foundational concepts (e.g., Continuity) |
| `measurement` | Measurable quantities (e.g., Hazard Rate) |
| `core-metric` | Primary computed metrics (e.g., κ) |
| `governance`  | Rules, thresholds, and control decisions |
| `discipline`  | Overarching bodies of study |

## Contribution process

1. **Fork** this repository
2. **Edit** `data/terms.json` — add your term following the schema exactly
3. **Validate** your JSON: `cat data/terms.json | python3 -m json.tool` (or use an online JSON validator)
4. **Open a Pull Request** with:
   - A clear title: `glossary: add term "<Your Term Label>"`
   - A brief justification for why this term belongs in the kappology framework
5. A maintainer will review for correctness, formal rigour, and schema compliance

## What makes a good term contribution?

- It fits within the κ–λ–β_c theoretical framework or its direct extensions
- The definition is precise and references parent concepts where appropriate
- The formula (if applicable) is correct and uses standard notation
- It does not duplicate an existing term

## Questions?

Open a [GitHub Discussion](https://github.com/Waste1and/Mecasimetra/discussions) or reach out via the contact form on the website.

---

*All contributions are subject to the [Apache-2.0 license](LICENSE). By submitting a pull request you agree that your contribution will be licensed under Apache-2.0.*
