# Meca Prime — Product & Economic Specification

**Company:** Mecasimetra Systems & Kappology  
**Status:** Experimental product specification  
**Version:** 0.1  
**Date:** 2026-08-19

## Purpose

Meca Prime is a minimal inference-routing layer designed to reduce qualified LLM inference cost while preserving an agreed level of response quality and service continuity.

The first implementation is intentionally narrow. It is not a replacement for every LLM gateway and it does not assume that the cheapest model is the correct model. It selects the minimum sufficient inference route for a request, measures the result, escalates when required, and attributes verified economic impact.

## Product Principle

> Compute only what is necessary. Preserve capability. Measure the value created.

Meca Prime applies the Kappology systems principle of sparse control to inference: expensive intelligence should be invoked where it contributes meaningful value rather than indiscriminately across every request.

## Initial Architecture

```text
Application
    |
    v
Meca Prime Gateway (Rust)
    |
    +--> Meca specialized model
    |
    +--> OpenRouter / efficient external model
    |
    `--> premium model / escalation route

Telemetry --> Python intelligence/evaluation layer --> savings ledger
```

### Rust gateway

The request-path component should prioritize:

- OpenAI-compatible request/response handling;
- low routing overhead;
- streaming;
- time-to-first-token measurement;
- provider/model fallback;
- token and cost metering;
- policy enforcement;
- request IDs and audit records; and
- graceful failure behavior.

### Python intelligence layer

The analysis and learning layer should handle:

- task/intent classification;
- complexity estimation;
- model capability scoring;
- route-policy calibration;
- response-quality evaluation;
- drift and regime analysis;
- counterfactual baseline estimation;
- savings attribution; and
- machine-learning experiments.

## Meca Specialized Model

The first Mecasimetra-hosted model should be deliberately bounded rather than positioned as a frontier general-purpose model.

Candidate responsibilities:

- classification;
- extraction;
- formatting and structured output;
- routing intent;
- short transformations;
- simple tool selection;
- low-knowledge deterministic assistance; and
- escalation detection.

Its primary objective is useful work at favorable latency and unit economics. Complex or knowledge-intensive requests should be escalated.

## Route Decision

For request `x` and candidate model `m`, Meca Prime should minimize expected cost subject to a quality requirement:

```text
m* = argmin_m C(m, x)
     subject to P(Q_m(x) >= Q_min) >= tau
```

where:

- `C(m, x)` is expected inference cost;
- `Q_m(x)` is measured/estimated response quality;
- `Q_min` is the workload-specific minimum acceptable quality; and
- `tau` is the required confidence that the route satisfies that quality level.

The router must be allowed to escalate when confidence is insufficient.

## Qualified Savings

Do not treat every reduction in model cost as a successful saving.

Let:

```text
B = auditable baseline inference cost
A = actual optimized inference cost
S_gross = max(B - A, 0)
```

A saving becomes **qualified** only when the routed result passes the agreed quality and service policy.

```text
S_qualified = S_gross * I_quality * I_policy
```

where the indicator terms equal 1 only when the applicable quality and policy gates pass.

This prevents Meca Prime from creating artificial "savings" by degrading the customer's product.

## Performance Pricing

The initial commercial experiment should align fees with measured value rather than rely exclusively on seat pricing.

```text
Prime fee = p * S_qualified
```

`p` is a contractually agreed performance percentage. It is a configurable commercial parameter, not a Kappology constant.

Required constraint:

```text
customer total optimized cost < agreed baseline cost
```

unless a customer explicitly chooses a higher-cost route for quality, latency, redundancy, or another documented objective.

### Contribution allocation

A configurable portion of realized value may be assigned to a transparent **Model & Research Contribution Pool**. Potential uses include:

- external model/provider inference;
- open-model ecosystem support where an appropriate contribution mechanism exists;
- Mecasimetra model hosting and training;
- evaluation infrastructure;
- reproducible research; and
- performance/efficiency research.

Do not describe this as money paid "to an AI model." Contributions must identify the actual recipient or funded activity.

## Savings Ledger

Every billable saving should be traceable to an auditable record containing at least:

```text
request_id
workload_class
baseline_policy
baseline_model
baseline_cost_estimate
selected_route
selected_model
actual_input_tokens
actual_output_tokens
actual_cost
quality_policy
quality_result
latency_ttft
latency_total
qualified_savings
prime_fee
customer_retained_savings
contribution_allocation
policy_version
```

The ledger should preserve enough information to reproduce billing without unnecessarily retaining customer prompt content.

## Privacy Principle

Default toward metadata-minimal operation. Prompt/response content should not be retained for billing when token counts, route metadata, hashes, evaluation outputs, or customer-controlled evaluation are sufficient. Any content retention must be explicit, documented, secured, and subject to the applicable privacy terms.

## Kappology Surface

Kappology should appear gradually through measurable product concepts rather than unsupported universal claims.

Initial mappings:

- **Continuity:** quality/service preservation across routing decisions.
- **Drift:** material change in workload or model behavior.
- **Sparse Control:** escalation to expensive inference only where needed.
- **Regime:** a detected structural change requiring route-policy reconsideration.
- **Contribution:** measurable economic or operational impact attributable to the system.

These mappings remain product/research definitions until validated by experiments.

## Minimum Viable Product

The first testable version should contain only:

1. one OpenAI-compatible gateway endpoint;
2. OpenRouter integration;
3. a small curated model set;
4. one premium escalation route;
5. one route classifier;
6. quality-policy evaluation;
7. usage/cost metering;
8. a savings ledger;
9. latency measurements; and
10. a minimal customer impact dashboard.

## Required Metrics

Before making performance claims, measure:

- cost per successful request;
- qualified savings rate;
- customer-retained savings;
- routing overhead;
- time to first token (p50/p95);
- total latency (p50/p95);
- quality pass rate;
- escalation rate;
- fallback/error rate;
- route distribution; and
- contribution allocation.

## Experimental Machine Learning Roadmap

Phase 1: deterministic policy and manually calibrated workload classes.  
Phase 2: collect route, quality, cost, and latency outcomes.  
Phase 3: train a model-selection predictor on qualified outcomes.  
Phase 4: introduce online calibration with conservative exploration.  
Phase 5: test domain-specific route policies and Kappology regime detection.

ML optimization must not silently relax the customer's quality policy to improve reported savings.

## Commercial Guardrails

- No fabricated baseline prices or counterfactual savings.
- No charging performance fees on failed quality gates.
- No hidden provider/model markup represented as savings.
- Customer billing methodology must be reproducible.
- Provider terms and model licenses must be respected.
- Premium latency is an evidence-backed service level only after benchmark data exists.
- Do not imply external provider endorsement without permission.
- Any contribution-pool claims must be backed by actual accounting records.

## Product Positioning

Meca Prime should initially be sold as a measurable inference-efficiency layer:

**Adaptive inference routing. Quality protected. Verified savings.**

Kappology is the research framework beneath the system; customers do not need to adopt Kappology terminology to receive value.

## Immediate Engineering Sequence

1. define the OpenRouter adapter interface;
2. implement the Rust gateway skeleton;
3. implement immutable request/usage records;
4. build deterministic routing policies before ML;
5. define workload-specific quality tests;
6. implement counterfactual baseline policies;
7. create the qualified-savings calculator;
8. benchmark routing overhead and TTFT;
9. select a bounded first Meca model; and
10. run controlled internal traffic before offering performance pricing.
