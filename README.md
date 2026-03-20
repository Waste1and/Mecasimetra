# Mecasimetra — Kappology · Intelligence Systems

> Continuity-first control systems, built on the κ–λ–β_c framework.  
> Founded by **Zechariah Slaughter** — Engineer and Founder of Kappology.

[![Apache-2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Static Site](https://img.shields.io/badge/type-static%20site-lightgrey)](index.html)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-green)](https://waste1and.github.io/Mecasimetra/)

---

## Live Site

**Domain**: [mecasimetra.com](https://mecasimetra.com)  
GitHub Pages fallback: `https://waste1and.github.io/Mecasimetra/`

Open `index.html` in any browser for local development. No build step required.

## Structure

```
├── index.html          # Single-page portfolio site
├── CNAME               # Custom domain — mecasimetra.com
├── robots.txt          # Crawler directives
├── sitemap.xml         # XML sitemap
├── css/
│   └── style.css       # Dark + light theme, animations, responsive layout
└── js/
    └── main.js         # Particles, scroll reveals, nav, theme toggle, modals, forms
```

---

## Pages and Sections

### `index.html`

- **Hero** — animated particle background, headline, key stats, early-access CTA
- **About** — interactive terminal animation, values
- **Skills** — ML/AI, Data Engineering, Cloud, Software, Agents, Analytics
- **Services** — Six offerings including kappology-specific services:
  1. Continuity Audit (κ–λ health modelling)
  2. Hazard-Rate Instrumentation (λ pipelines)
  3. Control Software & Load-Shedding Governance
  4. AI & ML Systems Engineering
  5. Data Platform Architecture
  6. Custom Consulting & Architecture Advisory
- **Projects** — six project showcase cards
- **Contact** — contact methods and enquiry form (Formspree)
- **Sign-Up Modal** — waitlist / early-access sign-up (Formspree)

## Setup

### 1. Formspree (email delivery)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create **two forms**:
   - **Contact** form → copy the form ID (e.g. `xabc1234`)
   - **Sign-Up / Waitlist** form → copy its form ID
3. In `js/main.js`, replace the placeholders:
   ```js
   const CONTACT_ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';
   const SIGNUP_ENDPOINT  = 'https://formspree.io/f/YOUR_SIGNUP_FORM_ID';
   ```

### 2. Plausible Analytics (privacy-first)

1. Create an account at [plausible.io](https://plausible.io)
2. Add site with domain `mecasimetra.com`
3. The script is already in `<head>` — no further changes needed:
   ```html
   <script defer data-domain="mecasimetra.com" src="https://plausible.io/js/script.js"></script>
   ```
   Custom events tracked: `Contact Form Submitted`, `Sign Up Completed`, `Signup Modal Opened`.

### 3. Custom Domain (mecasimetra.com)

The `CNAME` file is already configured. To activate:
1. Go to **Settings → Pages** in this repository
2. Under **Custom domain**, enter `mecasimetra.com` and save
3. In your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs (`185.199.108.153` etc.)
   - Or a `CNAME` record: `www → waste1and.github.io`
4. Enable **Enforce HTTPS** once DNS propagates

## Deployment

Push to `main` → GitHub Actions builds with Jekyll → deploys to GitHub Pages automatically.

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
