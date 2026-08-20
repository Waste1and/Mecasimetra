# Meca Verify — Measurement & Treasury Model

**Company:** Mecasimetra Systems & Kappology  
**Status:** Commercial measurement specification  
**Date:** 2026-08-19

## Objective

Meca Verify should prove customer value without exposing Mecasimetra's proprietary routing or Kappology implementation.

The customer sees four separate dimensions:

1. compute/use reduction;
2. monetary savings;
3. latency/service performance;
4. energy impact, only where evidence supports the estimate.

These dimensions must not be collapsed into one marketing number.

## 1. Compute profile

For each eligible workload, retain a baseline and actual observation using customer-approved quality/service requirements.

Recommended fields:

```text
request_id
account_id
workload_class
baseline_provider
baseline_model
actual_provider
actual_model
input_tokens
output_tokens
cached_tokens
baseline_estimated_tokens
actual_billable_tokens
baseline_cost
actual_provider_cost
quality_policy_id
quality_pass
latency_ms
baseline_latency_ms
observed_at
pricing_version
```

Do not store raw prompt/response content merely to calculate billing when metadata is sufficient.

### Compute reduction

```text
compute_proxy_reduction =
  (baseline_billable_units - actual_billable_units)
  / baseline_billable_units
```

Token counts are a billing/compute proxy, not a direct measurement of GPU energy or physical FLOPs.

## 2. Monetary savings

```text
gross_savings = baseline_cost - actual_provider_cost
```

Qualified savings require the workload to satisfy the agreed quality/service policy:

```text
qualified_savings = max(0, gross_savings) if quality_pass else 0
```

Mecasimetra performance fee:

```text
meca_fee = qualified_savings * account_performance_fee_rate
```

Customer retained savings:

```text
customer_retained_savings = qualified_savings - meca_fee
```

Provider/platform charges and Mecasimetra fees must be distinguishable in the ledger.

## 3. Latency profile

Track latency independently of cost.

Recommended customer-visible measurements:

- request latency p50;
- request latency p95;
- time-to-first-token when available;
- timeout/error rate;
- baseline versus actual latency delta;
- service-policy pass/fail.

```text
latency_delta_ms = actual_latency_ms - baseline_latency_ms
latency_improvement_pct =
  (baseline_latency_ms - actual_latency_ms) / baseline_latency_ms
```

A cheaper request is not qualified as superior merely because it costs less. The configured service/quality policy controls qualification.

## 4. Energy impact

Energy must be handled conservatively.

Mecasimetra should not claim direct kWh savings from token savings unless it has provider-specific or hardware-specific measurements that support the conversion.

Three evidence levels:

### Level A — Direct

Provider/datacenter/hardware telemetry provides measured energy attributable to the workload.

Customer label: **Measured energy**.

### Level B — Modelled

A documented hardware/provider coefficient estimates energy from compute activity.

Customer label: **Estimated energy** and show methodology/version.

### Level C — Proxy

Only token, request, latency, or compute-unit reductions are known.

Customer label: **Compute proxy reduction**. Do not display kWh or CO2 as if directly measured.

This preserves the long-term energy objective without overstating current evidence.

## 5. Value profile

Customer dashboard should show:

```text
Provider cost baseline
Actual provider cost
Qualified savings
Mecasimetra fee
Customer retained savings
Latency baseline / actual
Quality/service policy status
Compute proxy reduction
Energy evidence level
```

Never hide the Mecasimetra fee inside the savings number.

## 6. Money funnel

```text
CUSTOMER PAYMENT / FUNDING
        |
        +--> provider/platform obligation
        |
        +--> Mecasimetra platform/license revenue
        |
        +--> Mecasimetra performance-fee revenue
        |
        +--> taxes / processor / required obligations
                    |
                    v
              NET MECA REVENUE
                    |
        +-----------+-----------+-----------+
        |           |           |           |
   operations    research   infrastructure  reserve
                                            |
                                            v
                                  distributable treasury
                                            |
                                      authorized payout
                                            |
                                  configured company/owner
                                   self-custodial wallet
```

Customer funds owed to providers or customers must not be reported as Mecasimetra profit.

## 7. Treasury ledger

Minimum treasury record:

```text
ledger_event_id
account_id
source_type
source_reference
gross_amount
currency
provider_obligation
processor_fee
platform_revenue
performance_revenue
tax_or_required_reserve
net_meca_revenue
allocation_policy_version
payout_eligible_amount
created_at
reconciled_at
```

For a wallet payout, additionally record:

```text
destination_wallet
network
asset
amount
authorization_reference
transaction_id
status
```

Never store seed phrases or private keys in the product ledger.

## 8. Treasury management

Initial treasury automation authority:

```text
READ -> RECONCILE -> FORECAST -> RECOMMEND
```

Asset movement remains:

```text
PROPOSE -> AUTHORIZED REVIEW -> SIGN -> EXECUTE -> RECONCILE
```

A single agent must not control billing calculation, ledger mutation, and treasury signing without independent controls.

## 9. Treasury health metrics

Management dashboard should eventually include:

- cash available;
- provider obligations due;
- tax/required reserves;
- operating reserve;
- monthly recurring platform revenue;
- performance-fee revenue;
- gross and contribution margin;
- customer retained savings;
- outstanding receivables;
- refund/credit reserve;
- owner/company distributable balance;
- treasury payout history;
- runway under current burn.

## 10. Pricing/promotion integration

Every billable event resolves through a versioned entitlement:

```text
account
 -> tier
 -> pricing_schedule
 -> promotion (optional)
 -> provider-cost policy
 -> performance-fee rate
 -> measurement policy
 -> ledger event
```

Historical invoices must remain reproducible after prices or promotions change.

## 11. Guardrails

Mecasimetra should never improve its fee by intentionally:

- degrading the customer's baseline;
- sending unnecessary model calls;
- inflating token counts;
- routing to a more expensive provider to manufacture savings later;
- failing a quality requirement silently;
- counting provider credits as Mecasimetra-created savings without disclosure; or
- reporting modelled energy as directly measured energy.

The business earns when measurable customer value survives the agreed service requirements.
