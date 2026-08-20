# Meca Prime — Public Product Specification

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product development specification  
**Date:** 2026-08-19

## Purpose

Meca Prime is a managed computational optimization service intended to improve the economics and operation of supported AI workloads while respecting the customer's configured quality and service requirements.

This public document intentionally excludes proprietary routing methods, algorithms, formulas, benchmarks, model-selection logic, calibration, and internal implementation details.

## Customer contract

A production Prime agreement should define:

- eligible workload/service scope;
- customer quality and service requirements;
- the billing baseline or other pricing basis;
- eligible costs and exclusions;
- fee structure;
- data handling;
- provider/service dependencies;
- dispute and adjustment procedures; and
- any service-level commitments.

## Customer-visible outputs

Prime may report:

- service status;
- usage;
- actual service cost;
- contractually relevant comparison/baseline information;
- quality/service status;
- latency where relevant;
- qualified customer value or savings where contractually defined;
- Mecasimetra fee;
- adjustments; and
- policy/version identifiers needed for reconciliation.

## Optimization boundary

Mecasimetra may use proprietary software, models, external providers, internal services, and other computational infrastructure to deliver Prime. The specific decision process is confidential unless disclosure is required by the applicable customer agreement or law.

Prime must be capable of choosing a safer or more capable service path when customer requirements cannot be met by a lower-cost option.

## Billing integrity

A performance-oriented fee must be based on a documented customer agreement. Mecasimetra must not manufacture savings by degrading the agreed quality/service requirement, inflating the comparison baseline, hiding provider markup as savings, or generating unnecessary workload.

Corrections to billable records should be represented as adjustments rather than silent historical rewrites.

## Data minimization

Prime should collect only information required to provide, secure, measure, support, and bill the service. Raw customer prompt/response content is not a default billing requirement.

Customer production content is not model-training data by default.

## Security

Provider credentials, customer API secrets, proprietary optimization logic, internal security controls, and confidential telemetry must not be exposed through public interfaces.

## Public claims

Savings, latency, quality, uptime, and performance claims must correspond to the evidence and scope actually available. Confidential internal experiments are not public marketing claims.

## Positioning

**Managed computational optimization. Measurable outcomes. Customer-controlled requirements.**

Kappology identifies the company's research field. The product does not require customers to receive or understand proprietary Kappology methods.
