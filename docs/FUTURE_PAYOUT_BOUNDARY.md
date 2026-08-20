# Future Wallet Payout Boundary

**Company:** Mecasimetra Systems & Kappology  
**Status:** Pre-production architecture and compliance boundary  
**Date:** 2026-08-19

## Purpose

Mecasimetra may later support company-authorized payouts or withdrawals to an owner/customer-controlled wallet. This document preserves that future capability without turning the initial product into a custodial wallet, exchange, or money-transmission service.

## Initial design

```text
Company/account balance or approved payout source
        |
        v
Payout eligibility + accounting reconciliation
        |
        v
Compliance/risk checks appropriate to the transaction
        |
        v
Transaction prepared
        |
        v
Authorized signer reviews and approves
        |
        v
Funds sent to the configured self-custodial wallet
```

## Required boundaries

- Mecasimetra does not request or store a customer's seed phrase or wallet private key.
- Wallet addresses are verified before first use and after material changes.
- Asset-moving authority is separated from website, research, and ordinary AI-agent permissions.
- Treasury agents may read, reconcile, report, and recommend by default; they do not receive unrestricted signing authority.
- Payouts require an auditable authorization event.
- Production systems must respect applicable age, identity, sanctions, tax, provider, and jurisdictional eligibility requirements and must not be designed to bypass them.
- Any service that accepts/transmits value for third parties, operates an exchange, or takes custody of customer assets requires separate legal and compliance review before launch.

## Own-account treasury

Company treasury activity conducted for the company's own account should remain operationally distinct from transmitting customer funds. Accounting records should identify the source, purpose, destination, authorization, network/rail, fees, and resulting transaction identifier for each payout.

## Future integrations

A later implementation may support one or more compliant payment or blockchain rails through replaceable adapters. The public interface should expose payout status and customer/owner authorization requirements without exposing treasury credentials or private security controls.

## Security

- signing credentials remain outside source control;
- use hardware-backed, multisignature, or other appropriately controlled signing where justified by treasury size/risk;
- address changes require stronger authentication and a cooling-off/review policy where appropriate;
- maintain transaction limits and anomaly detection appropriate to the service;
- maintain reconciliation between product ledger, provider records, and on-chain/payment-rail results.

## Legal review gate

Before enabling production payouts or exchange functionality, obtain current review for the actual jurisdiction, users, assets, custody model, payment rail, and business activity. This document is an architecture boundary, not a conclusion that a particular financial activity is unregulated.
