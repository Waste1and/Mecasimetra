# Mecasimetra — Kappology · Intelligence Systems

> Continuity-first control systems, built on the κ–λ–β_c framework.  
> Founded by **Zechariah Slaughter** — Engineer and Founder of Kappology.

[![Apache-2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Static Site](https://img.shields.io/badge/type-static%20site-lightgrey)](index.html)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-green)](https://waste1and.github.io/Mecasimetra/)

---

## Live Site

Open `index.html` in any browser, or visit the deployed site at:  
**[https://waste1and.github.io/Mecasimetra/](https://waste1and.github.io/Mecasimetra/)**

---

## Visual Theme

The site uses a **black neon + magenta** design language:

| Design token     | Value                          |
|-----------------|-------------------------------|
| Background       | Near-black `#04040a`          |
| Primary accent   | Neon magenta `#f700ff`        |
| Secondary accent | Electric cyan `#00e8ff`       |
| Text primary     | Off-white `#e8eaf0`           |
| Glow             | `rgba(247, 0, 255, 0.45)`     |
| Font sans        | Inter (Google Fonts)          |
| Font mono        | JetBrains Mono (Google Fonts) |

Particle background, glow borders, and animated elements use the magenta palette throughout. Reduced-motion support is built in (`prefers-reduced-motion`).

---

## The Kappology Framework

Kappology is the formal engineering discipline for continuity-first control systems, founded by **Zechariah Slaughter**.

The framework is built on three core quantities:

| Symbol | Name                   | Definition                                              |
|--------|------------------------|---------------------------------------------------------|
| `κ`    | Continuity Scalar      | `κ = exp(−∫λ dt)` — system health in `[0, 1]`          |
| `λ`    | Hazard Rate            | Instantaneous risk of degradation or failure, `λ ≥ 0`  |
| `β_c`  | Bifurcation Threshold  | Canonical value `2.0`; when `λ > β_c`, intervene       |

When `λ > β_c`, the system must respond: shed load, trigger retraining, or enter controlled pause. This governance logic is non-bypassable in a kappology-compliant architecture.

> In the tradition of Newton's formal, mathematical accounts of natural behaviour — and Edison's relentless application of theory to working machinery — Zechariah Slaughter's kappology formalises the governance of intelligent systems that must not fail.

---

## Knowledge Graph — Interactive Glossary

The glossary at [`glossary.html`](glossary.html) provides:

- **Animated ancestor transitions** — click any term to see its full ancestry chain visualised as an SVG graph with magenta/cyan glow nodes
- **Breadcrumb navigation** — click ancestors in the breadcrumb bar to navigate the concept tree
- **Deep links** — each term has a URL: `glossary.html#/term/kappa`
- **Search** — press `/` to focus search; filters terms in real time
- **Extensible data** — all terms live in [`data/terms.json`](data/terms.json)

Current terms: κ (kappa) · λ (hazard rate) · β_c (bifurcation threshold) · Continuity · Kappology · Load Shedding · Retrain Trigger

---

## Structure

```
├── index.html           # Main site (hero, about, founder, skills, services, projects, contact)
├── glossary.html        # Interactive Kappology knowledge graph
├── css/
│   ├── style.css        # Main theme (black neon + magenta)
│   └── glossary.css     # Glossary-specific layout and graph styles
├── js/
│   ├── main.js          # Particle canvas, nav, scroll reveal, typing, counters, contact form
│   └── glossary.js      # Knowledge graph: term loading, SVG rendering, transitions, search
├── data/
│   └── terms.json       # Kappology term definitions (extensible)
├── LICENSE              # Apache-2.0
├── SECURITY.md          # Vulnerability reporting policy
├── DISCLAIMER.md        # No warranty; no safety-critical guarantee
└── CONTRIBUTING.md      # How to add terms to the knowledge graph
```

---

## Pages and Sections

### `index.html`

- **Hero** — animated particle background; κ-themed headline and stats
- **About** — Mecasimetra practice overview and terminal animation
- **Founder** — Zechariah Slaughter, Engineer and Founder of Kappology; inspiration, quote, and links
- **Skills** — ML/AI, Data Engineering, Cloud, Software, Agents, Analytics
- **Services** — Six offerings including kappology-specific services:
  1. Continuity Audit (κ–λ health modelling)
  2. Hazard-Rate Instrumentation (λ pipelines)
  3. Control Software & Load-Shedding Governance
  4. AI & ML Systems Engineering
  5. Data Platform Architecture
  6. Custom Consulting & Architecture Advisory
- **Projects** — six project showcase cards
- **Contact** — contact methods and enquiry form

### `glossary.html`

Interactive knowledge graph. See [Knowledge Graph](#knowledge-graph--interactive-glossary) above.

---

## Founder Attribution

**Zechariah Slaughter** is the Engineer and Founder of Mecasimetra and the founder of Kappology. The site presents him as building continuity-first systems in the tradition of Newton's formal rigour and Edison's applied innovation. This framing is inspirational and stylistic — see [DISCLAIMER.md](DISCLAIMER.md) for the full legal context.

---

## Deployment (GitHub Pages)

1. Go to **Settings → Pages** in this repository
2. Set **Source** to `main` branch, `/ (root)` folder
3. Save — the site will be live at `https://waste1and.github.io/Mecasimetra/`

No build step required. Pure HTML/CSS/JS.

---

## Contributing to the Glossary

See [CONTRIBUTING.md](CONTRIBUTING.md) for:

- The `terms.json` schema
- Field rules and category values
- Pull request process and review criteria

The knowledge graph is designed to grow. Contributions that extend the κ–λ–β_c framework or add closely related control-systems concepts are welcome.

---

## Legal & Licensing

| File              | Purpose |
|-------------------|---------|
| [LICENSE](LICENSE)           | Apache-2.0 open-source license |
| [SECURITY.md](SECURITY.md)   | How to report security vulnerabilities |
| [DISCLAIMER.md](DISCLAIMER.md) | No warranty; no safety-critical use guarantee |

This project is licensed under the **Apache-2.0** license, which provides:

- Patent grant (broad protection for users and contributors)
- Attribution requirements (preserve NOTICE and copyright)
- Free for commercial and non-commercial use
- No copyleft / no share-alike requirement

If you are building production control software using the kappology framework, you are responsible for independent validation and any required certifications. See [DISCLAIMER.md](DISCLAIMER.md).
