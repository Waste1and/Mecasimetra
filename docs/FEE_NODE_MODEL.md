# Mecasimetra Fee Node Model

**Company:** Mecasimetra Systems & Kappology  
**Status:** Commercial billing architecture  
**Date:** 2026-08-20

## Purpose

Mecasimetra uses fee nodes to separate different kinds of charges and value flows. A fee node is a named billing component with its own trigger, rate, disclosure, accounting destination, and authorization policy.

Fee nodes make richer business use possible without hiding charges inside one blended number.

## Core rule

```text
customer use
   -> billable event
   -> applicable fee nodes
   -> invoice / ledger
   -> provider obligations + Meca revenue + reserves
```

Each fee node must answer:

- what caused the charge;
- how it is calculated;
- whether it is recurring, usage-based, or value-based;
- whether a promotion modifies it;
- where the money is classified in treasury; and
- whether the customer can disable or avoid the triggering feature.

## Initial fee nodes

### NODE-PLATFORM

Pays for access to the selected Meca business tier.

Examples:

- Business Core monthly license;
- Business Premium monthly license;
- Enterprise platform fee.

Treasury classification: platform revenue.

### NODE-PROVIDER

Represents third-party model, gateway, infrastructure, or compute cost attributable to the customer's service.

This node is not Mecasimetra profit unless an explicit disclosed markup is part of the pricing schedule.

Treasury classification: provider obligation / cost of service.

### NODE-VERIFY

Performance-oriented fee based on contractually defined qualified savings or attributable value.

```text
verify_fee = qualified_savings * applicable_rate
```

If the agreed quality/service condition fails, no qualified-savings fee is generated for that event.

Treasury classification: performance revenue.

### NODE-PREMIUM

Optional premium capability fee for richer product use where not already included in the tier.

Potential uses:

- additional workspaces;
- extended retention;
- advanced reports;
- premium Signal/Continuity controls;
- advanced team administration;
- eligible Edge/Replay capabilities.

The UI must show whether the capability is included in the customer's tier or creates an additional charge before activation.

Treasury classification: product/add-on revenue.

### NODE-ONBOARD

One-time business activation/onboarding fee where applicable, including a Founding Premium activation fee.

Treasury classification: onboarding/service revenue.

### NODE-ENTERPRISE

Contract-specific fee node for enterprise integrations, private deployment, dedicated support, custom policy, or approved SLA services.

Treasury classification depends on the service described in the enterprise pricing schedule.

### NODE-TRANSACTION

Reserved for future payment/wallet transaction costs or payment-rail fees.

This node must not be activated until the applicable financial/legal architecture has been reviewed. It should primarily represent real processor/network costs unless a separate service fee is clearly disclosed.

## Rich-use composition

A richer business account may use multiple nodes at once without losing transparency.

Example:

```text
Business Premium
  NODE-PLATFORM     $59.00 promotional monthly rate
  NODE-PROVIDER     $83.20 actual provider usage
  NODE-VERIFY       $12.40 verified-value fee
  NODE-PREMIUM      $0.00 included feature
------------------------------------------------
  total             $154.60
```

The invoice should not collapse provider cost and Mecasimetra revenue into a single unexplained AI charge.

## Node entitlements

Every node resolves through the account's versioned commercial state:

```text
account
 -> tier
 -> role / privilege
 -> pricing schedule
 -> promotion
 -> enabled capability
 -> fee node
 -> ledger event
```

A promotion may change a node's rate without changing the underlying product tier.

## Basic versus privileged use

Basic users may trigger ordinary usage nodes within account limits, such as provider usage or included product capabilities.

Privileged authorization is required for actions such as:

- activating a paid add-on when it creates a new recurring charge;
- changing organization pricing/billing settings;
- accepting a new pricing schedule;
- increasing spending limits beyond delegated authority;
- changing payout destinations; or
- approving treasury-related actions.

## Customer controls

The billing UI should expose a simple node view:

```text
Platform          included / $X
Provider usage    metered
Verified value    X%
Premium features  included / optional
Enterprise        not enabled
```

Customers should be able to inspect the pricing version and promotion that produced each charge.

## Treasury mapping

```text
NODE-PROVIDER   -> provider payable / cost of service
NODE-PLATFORM   -> recurring platform revenue
NODE-VERIFY     -> performance revenue
NODE-PREMIUM    -> add-on/product revenue
NODE-ONBOARD    -> onboarding/service revenue
NODE-ENTERPRISE -> enterprise service revenue
NODE-TRANSACTION-> payment/network obligation or disclosed transaction revenue
```

This mapping lets Mecasimetra calculate gross margin and contribution margin without treating pass-through provider expenses as revenue quality.

## Safety and fairness rules

A fee node must never:

- activate silently;
- charge for a capability the customer did not enable or receive;
- manufacture savings to generate NODE-VERIFY revenue;
- double-charge the same provider cost under multiple nodes;
- create a recurring fee without clear recurring-price disclosure;
- bypass spending limits or privileged approval rules; or
- obscure the distinction between third-party costs and Mecasimetra revenue.

## Versioning

Each billable node event should record:

```text
fee_node_id
pricing_schedule_id
promotion_id
rate_or_amount
calculation_basis
currency
billable_event_id
customer_account_id
created_at
```

Historical records must remain reproducible when future prices change.
