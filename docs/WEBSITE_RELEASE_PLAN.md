# Final Website Release Plan

**Company:** Mecasimetra Systems & Kappology  
**Status:** Implementation target  
**Date:** 2026-08-19

## Objective

Rebuild the public site from a founder/technical showcase into the customer-facing entrance to Mecasimetra Systems & Kappology.

The site must communicate company identity, products, trust, and customer control while revealing no proprietary research or implementation mechanism.

## Visual direction

- near-monochrome black/graphite foundation;
- off-white primary typography;
- restrained semantic accent color;
- precise industrial/scientific layout;
- minimal decorative animation;
- no generic AI/crypto visual language;
- no unverified counters or performance claims;
- accessible contrast, keyboard navigation, focus states, and reduced-motion support.

## Homepage order

1. **Company hero**
   - Mecasimetra Systems & Kappology
   - concise customer value statement
   - `Enter System` and `View Products` actions

2. **Meca System**
   - high-level customer flow only
   - no proprietary algorithms or internal research

3. **Products**
   - Meca ID
   - Verify
   - Prime
   - Continuity
   - Signal
   - Edge / Replay when ready

4. **Customer control**
   - minimal data
   - understandable billing
   - self-custodial wallet boundary
   - explicit authorization for asset-moving actions

5. **Company domains**
   - computing & AI
   - agriculture
   - biomedical systems
   - energy & infrastructure
   - industrial systems
   - research

6. **Kappology**
   - identify it as the company's research field
   - do not publish private formulas, mechanisms, benchmarks, or unpublished research

7. **Founder/company**
   - concise founder identity and company purpose
   - avoid replacing product information with a résumé/skills wall

8. **Trust layer**
   - Security
   - Privacy
   - Terms
   - Data controls
   - wallet/self-custody notice
   - evidence/disclosure policy

## Authenticated shell

```text
Overview | Verify | Prime | Continuity | Signal | Wallet | Usage | Settings
```

The authenticated UI should show customer outcomes and controls, not proprietary decision logic.

## Meca ID

Initial fields:

```text
username
short description
optional wallet display
notification preferences
```

No profile-picture upload in v1.

## Public claim policy

Remove:

- unsupported counters;
- unpublished benchmark results;
- proprietary mathematical details;
- internal optimization descriptions;
- universal scientific claims;
- implied certifications or legal exemptions that do not exist.

Use only claims supported for the scope in which they are presented.

## Release phases

### Phase 1 — Public cleanup

- remove proprietary/research leakage from public docs and site;
- remove unsupported metrics;
- update company/legal identity;
- update security/privacy/terms links.

### Phase 2 — Visual rebuild

- implement monochrome design system;
- rebuild hero and navigation;
- implement product/system sections;
- correct mobile/responsive structure;
- implement accessibility baseline.

### Phase 3 — Account shell

- create Meca ID UI;
- add wallet-linking interface with self-custody notices;
- add settings/data-control surface;
- add Signal notification shell.

### Phase 4 — Product integration

- connect Verify and Prime APIs when production-ready;
- add authenticated usage/value reporting;
- connect Continuity and Signal events;
- expose only approved customer-facing outputs.

### Phase 5 — Operations

- enable monitoring agents with narrow permissions;
- add release checks and rollback procedures;
- add treasury reconciliation/reporting agent in read/recommend mode;
- establish incident and change-management logs.

## Release gate

Do not treat the site as production-ready until:

- public IP scan passes;
- secrets scan passes;
- accessibility checks pass;
- legal/privacy/security documents match deployed behavior;
- wallet flow never requests seed/private-key material;
- customer data collection matches the documented minimum;
- unsupported performance claims are absent;
- production credentials are outside the repository; and
- rollback/incident procedures exist.
