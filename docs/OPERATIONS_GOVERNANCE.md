# Operations & Agent Governance

**Company:** Mecasimetra Systems & Kappology  
**Status:** Pre-production governance specification  
**Date:** 2026-08-19

## Principle

Automation should reduce operational work without concentrating unnecessary authority in one agent or service.

No single autonomous agent should simultaneously control production deployment, security policy, customer data, and treasury asset movement.

## Agent roles

### Site Agent

May:

- detect broken links and stale public content;
- run accessibility and basic site checks;
- propose documentation changes;
- report deployment health.

May not publish proprietary IP or make unreviewed legal/performance claims.

### Release Agent

May:

- run tests and build checks;
- compare a candidate release with the approved branch;
- produce a release report;
- recommend deployment or rollback.

Production deployment authority should be separately controlled until a mature approval policy exists.

### Security Agent

May:

- monitor dependency/security alerts;
- detect suspicious authentication/API patterns;
- flag secret exposure;
- recommend credential rotation or containment.

It should not reveal detection thresholds publicly.

### Research Agent

Operates only within the private research boundary. It may organize experiments, compare results, and prepare internal reports. It must not publish confidential research automatically.

### Finance / Treasury Agent

Initial authority is **read, reconcile, report, recommend**.

It may:

- read authorized treasury/account balances;
- reconcile revenue, provider expense, fees, and contribution allocations;
- identify discrepancies;
- prepare accounting summaries;
- forecast expected obligations;
- create alerts.

It may not autonomously sign or broadcast asset-moving transactions in the initial production model.

## Treasury action boundary

```text
Agent observes
      |
Agent reconciles
      |
Agent proposes action
      |
Authorized human reviews
      |
Customer/company-controlled signer authorizes
      |
Network/payment rail executes
```

No seed phrase, private key, signing secret, or unrestricted payment credential belongs in source control or an agent prompt.

## Change management

Agents should work through auditable proposals:

```text
observe -> propose -> test -> review -> approve -> deploy -> verify
```

Emergency security containment may use separately defined restricted automation, but its permissions must be narrow and logged.

## Data boundary

Agents receive only the data necessary for their assigned role. Site maintenance does not need treasury data. Treasury reconciliation does not need customer prompt content. Public documentation automation does not need private research datasets.

## Logging

Record:

- agent/service identity;
- requested action;
- affected resource;
- authorization source;
- result;
- timestamp; and
- rollback/correction information where relevant.

Logs must not contain seed phrases, private keys, full API secrets, or unnecessary customer content.

## Production gate

Before autonomous write authority is enabled for any agent, define its exact resources, maximum impact, rollback path, approval requirements, rate limits, and incident response.
