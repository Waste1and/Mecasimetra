# Mecasimetra UI System

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product design specification  
**Date:** 2026-08-19

## Design objective

The interface should feel like a scientific/industrial control product, not a freelancer portfolio, crypto landing page, or generic AI dashboard.

Core visual qualities:

```text
monochrome base
+ precise typography
+ restrained signal color
+ clear evidence states
+ measurable value
+ low visual noise
```

## Current UI flaws

The existing site has a usable dark-tech foundation but several structural problems:

1. The hero is dominated by an animated orb and unverified statistics rather than a product/customer outcome.
2. The site reads as founder/skills/services first, not product/system first.
3. Generic technology-logo/tag lists dilute the unique Kappology/Mecasimetra story.
4. Strong magenta/cyan glows, particles, floating cards, terminal decoration, and repeated animations create visual competition.
5. Research values such as κ, λ, and β are shown as universal operational facts instead of evidence-scoped measurements.
6. The product/account journey is absent.
7. Mobile removes the main visual identity rather than simplifying it.
8. Founder styles are currently placed inside a mobile media block in the stylesheet and must be corrected.
9. Public calls to action are mostly “services/contact/get access” rather than “connect system / see verified impact / create account.”
10. Public claims and product state are not visually distinguished as defined, implemented, observed, or validated.

## New information architecture

### Public landing page

```text
NAV
MECASIMETRA SYSTEMS & KAPPOLOGY
Product value statement
System map
Meca Verify / Prime / Continuity / Signal
Evidence-backed work
Kappology research layer
Company domains
Founder
Legal / privacy / security
Sign in / Create Meca ID
```

### Authenticated control surface

```text
Overview
Verify
Prime
Continuity
Signal
Wallet
Usage
Settings
```

## Hero

The first screen should answer three questions immediately:

- What is Mecasimetra?
- What measurable result does it produce?
- What can a customer do next?

Recommended structure:

```text
MECASIMETRA SYSTEMS & KAPPOLOGY
Measure value. Preserve capability.

AI/system optimization with auditable savings,
continuity-aware routing, and minimal-data control.

[Create Meca ID] [View System]
```

No unverified counters in the hero.

## System visual

Replace the decorative orb with a simple live/system diagram:

```text
INPUT
  |
  v
VERIFY --> PRIME --> MODEL/PROVIDER
  |          |
  |          v
  +---- CONTINUITY
            |
            v
          SIGNAL
```

Use motion only to indicate actual flow/state, and respect `prefers-reduced-motion`.

## Color

Use a near-monochrome base:

- black/near-black backgrounds;
- off-white primary type;
- neutral grays for secondary text and borders.

Signal colors should be semantic rather than decorative:

- one primary accent for Mecasimetra/Kappology identity;
- secondary accent only for comparison/route state;
- warning/error colors only for real warnings/errors.

Avoid broad neon glow on every card/button.

## Typography

- sans-serif for product/business reading;
- mono only for metrics, IDs, formulas, policy versions, code, and research notation;
- larger body text and shorter line lengths for research/legal content;
- avoid overusing uppercase/letter spacing.

## Cards

Reduce generic cards. Every card should represent one of:

- product;
- measurable system state;
- evidence item;
- domain;
- notification/action.

Product cards should show status such as:

```text
DEFINED
IMPLEMENTED
OBSERVED
VALIDATED
```

and never imply a stronger state than the underlying evidence.

## Meca ID UI

Minimal profile creation:

```text
@username
short description
[Connect wallet]
notification preferences
```

No avatar uploader in v1.

Wallet UX must state clearly:

- wallet connection proves wallet control, not legal identity;
- Mecasimetra never needs a seed phrase;
- asset-moving transactions are reviewed/signed in the user's wallet;
- regulated features may have separate eligibility requirements.

## Verify UI

The flagship customer card should be economic and understandable:

```text
Qualified savings       $X
Customer retained       $Y
Mecasimetra fee         $Z
Contribution allocation $C
Quality pass rate       Q%
```

A “How calculated” drawer should show baseline policy, policy version, excluded requests, and adjustment events without exposing proprietary model-selection logic.

## Prime UI

Do not show secret routing weights.

Show outcomes:

```text
Route: Efficient model
Reason: quality confidence passed
Baseline: Premium route
Cost delta: -X%
Latency delta: +Y ms
Quality gate: PASS
```

## Continuity UI

Show trends and calibrated state rather than one magical κ number.

Recommended components:

- continuity trend;
- normalized hazard trend;
- current calibration/policy name;
- regime-change markers;
- data sufficiency/evidence state.

## Signal UI

Notifications should have:

- event title;
- reason;
- evidence/trigger;
- recommended next step;
- optional customer-authorized action;
- severity;
- timestamp.

Avoid human-like urgency or manipulative engagement mechanics.

## Wallet UI

Wallet area should prioritize self-custody clarity:

```text
Connected wallet
Public address
Last authentication
Session status
[Disconnect]
```

If a transaction is prepared:

```text
Review transaction
Destination
Asset/value
Network fee estimate
Purpose
[Open wallet to review/sign]
```

Never ask for or display seed phrases/private keys.

## Legal UI

Legal/privacy/security information should be first-class, not hidden footer boilerplate.

Footer and account settings should expose:

- Terms;
- Privacy;
- Security;
- Data controls;
- Wallet/self-custody notice;
- Product evidence definitions;
- contact/legal channel when established.

## Mobile

- retain a simplified system mark/diagram rather than hiding identity entirely;
- use bottom-sheet or full-screen navigation with visible close state;
- stack metrics vertically with clear grouping;
- ensure wallet signing explanations remain readable;
- minimum 44px interactive targets;
- avoid horizontal metric overflow.

## Accessibility

- keyboard navigation;
- visible focus rings;
- semantic headings;
- sufficient contrast;
- reduced-motion support;
- no information conveyed by color alone;
- accessible form labels/errors;
- meaningful button names;
- status announcements where dynamic data updates.

## Conversion model

The UI should guide users through:

```text
UNDERSTAND -> TRUST -> CONNECT -> VERIFY -> SAVE -> EXPAND
```

not:

```text
IMPRESS -> CONTACT
```

That change is the central UI upgrade.
