# Mecasimetra Social Layer

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product architecture draft  
**Date:** 2026-08-19

## Purpose

The Mecasimetra social layer gives customers a minimal identity inside the product without turning the platform into a traditional social network.

The account surface is intentionally sparse:

```text
username
short description
wallet link
account/product status
notification preferences
```

Profile pictures are not part of the initial design.

## Design principle

The social layer exists to connect identity, product usage, verified value, notifications, and customer-controlled wallet actions with the least necessary personal data.

It is not designed around follower counts, behavioral advertising, engagement maximization, or demographic profiling.

## Account creation

Initial wallet-linked authentication should use a self-custodial signature challenge rather than passwords when supported:

1. user selects a compatible wallet;
2. Mecasimetra issues a short-lived challenge;
3. user approves/signs the challenge in their wallet;
4. Mecasimetra verifies the signature;
5. the account is associated with the public wallet identifier;
6. Mecasimetra issues an authenticated session.

Mecasimetra must never ask for or store a customer's wallet seed phrase or private key.

## Public profile

Initial public profile fields:

- `username` — unique product identity;
- `description` — short optional account description;
- `wallet_display` — optional wallet/public-address display chosen by the user;
- `joined_at` — optional public account age/date; and
- `product_badges` — evidence-backed product status such as Verify enabled or Prime test participant.

Do not expose private usage, savings, provider choices, balances, billing, API metadata, or security events publicly by default.

## Customer value surface

Each account may receive a private dashboard showing:

- qualified AI savings;
- customer-retained value;
- Mecasimetra contribution/fee;
- contribution-pool allocation;
- model/route distribution;
- quality-policy pass rate;
- latency/continuity summaries; and
- product notifications.

The goal is to show Mecasimetra's measurable contribution without exposing proprietary routing logic.

## Wallet and value movement boundary

The first social release is designed around **self-custody**.

Mecasimetra may prepare or display customer-selected transaction information or invoke a wallet interface, but the customer must review and sign any asset-moving transaction through their own wallet unless and until a separately reviewed regulated/custodial product is launched.

The public social layer must not store private keys or seed phrases and should not represent wallet-linked identity as equivalent to a legally verified identity.

## Notifications

The Mecasimetra AI notification layer may surface events such as:

- unusual inference-cost movement;
- quality-policy failures;
- continuity/drift alerts;
- verified savings milestones;
- API-key or security events;
- product/service notices; and
- customer-configured budget thresholds.

Notifications must be explainable enough to identify the triggering event or policy. They should not silently execute financial actions.

## Minimal-data commitment

The basic account should not require:

- a profile image;
- legal name;
- phone number;
- home address;
- precise location;
- contact-list access;
- demographic attributes; or
- social graph imports.

Additional information may be required later for a specific regulated or contractual product, but it should not be collected merely for the basic account.

## Moderation and abuse

Even a minimal username/description system needs controls for impersonation, unlawful content, harassment, malicious links, spam, and abuse. Account descriptions should have strict length and content rules and should not accept active HTML/script content.

## Relationship to Kappology

Kappology appears through product measurements rather than ideology:

- continuity of service and quality;
- drift notifications;
- sparse escalation/control;
- regime-change alerts; and
- measurable contribution.

The social layer is a customer surface; proprietary Kappology calibration, security logic, and routing intelligence remain private.
