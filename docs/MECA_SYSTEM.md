# Meca System — Public Product Architecture

**Company:** Mecasimetra Systems & Kappology  
**Status:** Public architecture specification  
**Date:** 2026-08-19

## Purpose

Meca System is the unified customer surface for Mecasimetra products. Public documentation describes customer-visible behavior and controls without documenting proprietary research or implementation methods.

```text
IDENTITY -> MEASURE -> OPTIMIZE -> MONITOR -> NOTIFY -> CUSTOMER ACTION
```

## Modules

- **Meca ID** — minimal username/account identity with optional customer-controlled wallet linking.
- **Meca Verify** — reports measurable customer outcomes and attributable value under an agreed policy.
- **Meca Prime** — manages computational workloads under customer-defined quality, cost, and service requirements.
- **Meca Continuity** — reports operational state and meaningful changes relevant to the configured service.
- **Meca Signal** — delivers product, operational, and security notifications.
- **Meca Edge** — Mecasimetra-hosted inference for workloads where the service is appropriate and supported.
- **Meca Replay** — scenario and systems-analysis services.

## Customer control surface

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

The customer interface should explain outcomes, charges, permissions, and required actions without exposing confidential algorithms or security logic.

## Public information

The public/customer surface may expose:

- account and product status;
- customer-visible usage;
- contractually defined cost/value measurements;
- quality/service status;
- understandable optimization outcomes;
- operational notifications;
- customer data controls;
- wallet/session status; and
- customer-authorized transaction preparation where supported.

## Private information

The following are not part of the public product specification:

- proprietary research methods;
- algorithms and optimization mechanisms;
- internal formulas and benchmark results;
- model-selection features, weights, prompts, or calibration;
- customer-specific internal baselines beyond what a contract requires for billing transparency;
- fraud/abuse/security detection logic;
- confidential telemetry and datasets;
- proprietary model assets; and
- implementation details whose disclosure would weaken security or trade-secret protection.

## Meca ID

The initial profile is intentionally small:

```text
@username
short description
optional wallet display
account/product status
notification preferences
```

No profile photograph is required in v1. The initial system does not depend on follower counts, engagement scoring, behavioral advertising profiles, contact imports, or public balance displays.

## Wallet boundary

Wallet linking demonstrates control of a wallet address; it does not by itself establish legal identity.

The initial design is self-custodial. Mecasimetra does not request or retain seed phrases or private keys. Customer asset-moving actions require customer review and authorization through the customer's wallet unless a separately reviewed product expressly establishes another arrangement.

## Verify

Verify should make commercial outcomes understandable and reconcilable under the applicable customer agreement. It may display eligible usage, agreed baseline information, actual service cost, quality/service status, qualified value, fees, adjustments, and customer-retained value.

The UI should expose enough information to understand a bill without exposing proprietary optimization logic.

## Prime

Prime should show customer-relevant outcomes such as service status, selected service class, quality status, cost impact, and latency where appropriate. It must not expose confidential decision weights or internal reasoning traces.

## Continuity

Continuity should present understandable operational state, trends, alerts, and policy-relevant changes. Internal detection methods remain proprietary.

## Signal

Signal may deliver notifications about service state, cost/value changes, security events, customer-configured thresholds, and actions requiring attention. Notifications do not themselves authorize asset transfers.

## Evidence rule

Public claims must be supported at the level implied by the wording. Internal experiments and confidential benchmarks remain internal unless an explicit disclosure decision is made.

## Commercial rule

Pricing must not depend on degrading customer quality, manufacturing unnecessary usage, hiding markup, or using an inflated baseline. Production pricing and billing definitions belong in the customer agreement.
