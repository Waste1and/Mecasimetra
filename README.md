# Mecasimetra — Intelligence Systems

> Architecting autonomous AI solutions, data pipelines, and intelligent software for the modern enterprise.

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

## Sections

- **Hero** — animated particle background, headline, key stats, early-access CTA
- **About** — interactive terminal animation, values
- **Skills** — ML/AI, Data Engineering, Cloud, Software, Agents, Analytics
- **Services** — four core service offerings
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

