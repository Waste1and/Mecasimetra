# Infrastructure & Architecture

## System Overview

Mecasimetra is a **modern, type-safe static site** built with:
- **Vite** — Lightning-fast build tool and dev server
- **TypeScript** — Full type safety across the codebase
- **ESLint + Prettier** — Automated code quality and formatting
- **GitHub Actions** — Comprehensive CI/CD pipeline
- **Lighthouse CI** — Continuous performance monitoring

## Build Pipeline

### Development
```bash
npm install
npm run dev
```
Starts local dev server at `http://localhost:5173` with hot reload.

### Production Build
```bash
npm run build
```
Outputs optimized, minified assets to `./dist`.

### Code Quality
```bash
npm run lint        # Check & fix code style
npm run format      # Format with Prettier
npm run type-check  # Type validation
npm run test        # Run tests
```

## CI/CD Workflow

| Stage | Trigger | Actions |
|-------|---------|----------|
| **Lint & Format** | PR/Push | ESLint, Prettier checks |
| **Type Check** | PR/Push | TypeScript validation |
| **Security** | PR/Push/Weekly | npm audit, Trivy scan |
| **Build & Test** | PR/Push | Vite build, test coverage |
| **Deploy** | Push to main | GitHub Pages deployment |
| **Lighthouse** | PR | Performance audits |

## Performance Targets

- **Lighthouse Performance**: >= 85%
- **Accessibility**: >= 90%
- **Best Practices**: >= 85%
- **SEO**: >= 90%
- **Bundle Size**: < 200KB (gzipped)
- **First Contentful Paint**: < 1.5s

## Security

- **Dependabot** — Automated dependency updates
- **npm audit** — Vulnerability scanning
- **Trivy** — Container/filesystem scanning
- **CNAME validation** — Custom domain verification
- **CSP headers** — Content Security Policy enforcement

## Environment Configuration

Copy `.env.example` to `.env.local` and configure:
```
VITE_PLAUSIBLE_DOMAIN=your-domain.com
VITE_CONTACT_FORM_ID=formspree-id
VITE_SIGNUP_FORM_ID=formspree-id
```

## Monitoring

- **Plausible Analytics** — Privacy-first analytics
- **Lighthouse CI** — Automated performance reports
- **GitHub Status Checks** — Build & deployment status

## Rollback

To revert a deployment:
```bash
git revert <commit-sha>
git push origin main
```

GitHub Actions will automatically rebuild and redeploy.

---

For questions or issues, see [CONTRIBUTING.md](CONTRIBUTING.md) or [SECURITY.md](SECURITY.md).
