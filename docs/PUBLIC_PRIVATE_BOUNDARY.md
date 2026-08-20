# Public / Private Boundary

**Company:** Mecasimetra Systems & Kappology  
**Status:** Public disclosure policy  
**Date:** 2026-08-19

## Rule

The public Mecasimetra repository is a product, trust, integration, and company surface. It is not the repository for proprietary research or implementation intelligence.

## Allowed publicly

- company identity and product names;
- customer-facing product descriptions;
- stable public API/interface contracts;
- privacy and security commitments that match deployed behavior;
- legal terms and customer controls;
- high-level architecture necessary for integration;
- customer-visible metrics and billing explanations;
- accessibility and UI specifications;
- security reporting instructions; and
- evidence deliberately approved for publication.

## Private by default

- research methods and unpublished scientific work;
- formulas and internal mathematical constructions;
- private benchmark data and methodology;
- optimization/routing algorithms;
- internal model/evaluator prompts;
- model-selection features, weights, calibration, or training data;
- security/fraud/abuse thresholds and detection logic;
- customer-specific internal policies and confidential telemetry;
- treasury credentials, signing material, or transaction authorization secrets;
- provider/API credentials;
- incident details that would increase exploitation risk; and
- proprietary implementation code.

## Public wording rule

Describe **what the customer receives**, not **how the private mechanism works**.

Good:

> Prime manages supported computational workloads under customer-defined quality and service requirements.

Not appropriate for the public repository:

> A description of the private algorithm, mathematical construction, checkpoint strategy, calibration, benchmark, or internal decision process used to produce that outcome.

## Disclosure review

Before publishing technical evidence, ask:

1. Is disclosure required for customer understanding, interoperability, legal compliance, or trust?
2. Does it reveal a proprietary method or materially reduce trade-secret protection?
3. Is the evidence strong enough for the wording proposed?
4. Does it reveal a security control or attack surface?
5. Has the company deliberately approved the disclosure?

If any answer is uncertain, keep the material private until reviewed.

## Repository rule

The public repository must never be used as temporary storage for private IP. Material should be classified before commit, not moved private only after publication.
