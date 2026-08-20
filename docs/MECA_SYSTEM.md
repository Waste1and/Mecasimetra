# Meca System — Unified Product Architecture

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product architecture draft  
**Date:** 2026-08-19

## System thesis

Mecasimetra should operate as one customer system, not a collection of disconnected AI tools.

The public experience is organized around a minimal identity, measurable value, continuity, and deliberate action:

```text
IDENTITY -> OBSERVE -> VERIFY -> OPTIMIZE -> NOTIFY -> ACT
```

Kappology provides the research language beneath continuity, drift, sparse control, regime change, and contribution. Proprietary policy, security, data, and model logic remain private.

## Working system name

**Meca System** is the umbrella product architecture.

Customer-facing modules:

- **Meca ID** — minimal username + self-custodial wallet-linked identity;
- **Meca Verify** — qualified savings and impact ledger;
- **Meca Prime** — quality-protected inference routing;
- **Meca Continuity** — drift/continuity monitoring;
- **Meca Signal** — AI-generated product/security notifications;
- **Meca Edge** — bounded Mecasimetra-hosted inference;
- **Meca Replay** — scenario and policy simulation.

The modules share one account, one audit model, one notification surface, and one evidence standard.

## Customer state

The customer should experience the system as a single control surface rather than navigating separate products.

```text
Meca ID
  |
  +-- Verify: What value was created?
  +-- Prime: Where should inference run?
  +-- Continuity: Is behavior drifting?
  +-- Signal: What changed and why?
  +-- Wallet: What customer-authorized action is available?
  `-- Settings: What may Mecasimetra collect/do?
```

## Public/private boundary

### Public

- account creation and wallet-signature interface;
- documented API schemas;
- customer dashboard;
- qualified-savings totals;
- understandable route outcomes;
- continuity/drift status;
- notification reasons;
- customer-controlled transaction preparation;
- public evidence/benchmark reports.

### Private

- model-selection features and weights;
- evaluator prompts and confidence calibration;
- customer-specific baselines;
- fraud/abuse and security rules;
- internal Kappology calibration;
- billing-integrity logic;
- raw security telemetry;
- proprietary model assets;
- private training/evaluation datasets.

## Minimal social identity

Meca ID is not a traditional social network profile.

Initial public identity:

```text
@username
short description
optional wallet display
joined/product status
```

No profile photographs in v1.

No follower counts, engagement scoring, behavioral ad profiles, contact imports, or public balance displays.

## Value ledger

Every economic claim should resolve to a private ledger event and an understandable public/customer-facing explanation.

```text
baseline
actual
quality gate
qualified savings
customer retained value
Mecasimetra fee
contribution allocation
policy version
```

Corrections create adjustment events rather than rewriting history.

## Signal layer

Meca Signal is the notification intelligence layer.

It may notify a customer that:

- qualified spend changed materially;
- routing quality degraded;
- a provider/model regime shifted;
- continuity/drift crossed a customer policy;
- an API/security event occurred;
- a budget threshold was reached; or
- a customer-authorized action is available.

Signal explains what triggered the message. It does not silently transfer assets or bypass customer approval.

## Wallet boundary

Wallet linking proves control of a public address, not legal identity.

The initial system is self-custodial:

```text
Meca prepares/displays action
        |
        v
Customer wallet reviews
        |
        v
Customer signs
        |
        v
Blockchain/network executes
```

Mecasimetra does not request or retain seed phrases/private keys and does not launch custody, exchange, or money-transmission behavior without separate product/legal review.

## Kappology surface

Kappology appears progressively through product outcomes:

- `κ` / continuity: persistence of required quality/service across changes;
- `λ` / normalized hazard: calibrated disturbance pressure;
- drift: meaningful movement away from baseline;
- regime: structural change requiring policy reconsideration;
- sparse control: use expensive/strong intervention only where justified;
- contribution: attributable economic or operational effect.

Avoid universal thresholds across unrelated domains.

## Evidence states

Every metric/claim carries one internal state:

```text
DEFINED -> IMPLEMENTED -> OBSERVED -> VALIDATED
```

The UI may expose the state for research/system claims so customers can distinguish product capability from ongoing research.

## Revenue architecture

The system supports several charging surfaces:

- performance fee on qualified savings;
- fixed subscription for Verify/Continuity infrastructure;
- event/inference metering;
- Meca Edge hosted inference;
- Replay/audit engagements;
- enterprise/private deployment;
- security/continuity reporting.

Pricing must not create an incentive to degrade quality, inflate baselines, hide markup, or generate unnecessary traffic.

## Product moat

The moat is not simply API routing.

It is the combined system of:

```text
minimal identity
+ auditable economic attribution
+ continuity-aware optimization
+ proprietary policy/security plane
+ customer-visible explanations
+ bounded owned inference
```

That combination is the unique system to test and refine.
