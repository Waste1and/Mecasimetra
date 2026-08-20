# Meca ID — Minimal Account & Social Layer

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product architecture draft  
**Date:** 2026-08-19

## Purpose

Meca ID gives customers a minimal identity inside Mecasimetra without reproducing the data collection and engagement mechanics of a conventional social network.

Initial account surface:

```text
username
short description
optional wallet link/display
account/product status
notification preferences
```

Profile pictures are not part of the initial design.

## Account creation

Where wallet authentication is supported, the intended pattern is a customer-controlled signature challenge. Mecasimetra must never request or store a customer's wallet seed phrase or private key.

Wallet control is not represented as government-verified legal identity.

## Public profile

A customer may choose to display:

- username;
- short description;
- optional public wallet identifier;
- optional join/product status.

Private usage, savings, provider choices, balances, billing data, API metadata, security events, and internal product decisions are not public by default.

## Customer dashboard

Authenticated customers may see product status, usage, contractually defined value/cost information, service/quality state, notifications, and data controls.

The dashboard must not expose proprietary Mecasimetra implementation methods.

## Wallet boundary

The initial design is self-custodial. Where a customer chooses an asset-moving action, the customer reviews and authorizes it through the customer's wallet unless a separately reviewed product explicitly establishes another arrangement.

## Notifications

Meca Signal may surface service events, security notices, customer-configured thresholds, and product/value changes. Notifications should identify the relevant event or policy without exposing secrets or confidential internal logic.

Notifications do not themselves authorize financial transactions.

## Minimal-data commitment

The basic account does not require a profile image, legal name, phone number, home address, precise location, contact-list access, demographic profile, or imported social graph merely to exist.

Additional information may be required for a particular regulated or contractual service, but that requirement must be specific to that service.

## Moderation and abuse

Public text fields require controls for impersonation, unlawful content, harassment, malicious links, spam, and abuse. Descriptions should be length-limited and must not execute active HTML/script content.

## Privacy rule

Collect only what is necessary to provide, secure, measure, support, and bill the selected service. Customer production content is not model-training data by default.
