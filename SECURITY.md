# Security Policy — Mecasimetra Systems & Kappology

## Scope

This public policy covers the Mecasimetra website and public product code/documentation in this repository. Private research, production infrastructure, proprietary services, and customer systems may have additional internal controls and incident procedures.

## Reporting a vulnerability

Do not open a public issue containing exploit details, credentials, customer data, or security-sensitive information.

Preferred reporting path:

1. use GitHub Security Advisories for this repository when available; or
2. use the official company security/contact channel once published.

Until a dedicated company security contact exists, use the repository's private GitHub security-reporting mechanism rather than public discussion.

## What to include

- affected component;
- concise vulnerability description;
- potential impact;
- reproduction steps where safe;
- relevant version/commit; and
- suggested remediation if known.

Do not include real seed phrases, private keys, unrestricted API credentials, or unnecessary customer data in a report.

## Public security commitments

The product architecture is designed around:

- minimal data collection;
- customer-controlled wallet custody in the initial wallet design;
- no seed/private-key collection through normal product flows;
- separation of public interfaces from private security logic;
- narrow operational-agent permissions;
- secret management outside source control;
- auditable release/change processes; and
- coordinated vulnerability disclosure.

These are architectural commitments, not claims of certification. Public materials must not imply SOC 2, ISO 27001, PCI, HIPAA, or another certification/compliance status unless it has actually been obtained for the applicable service.

## Responsible disclosure

Please provide a reasonable opportunity to investigate and remediate a reported issue before public disclosure. Response times may vary while the company is in development and are not contractual service-level commitments unless a separate agreement states otherwise.

## Out of scope

Reports about third-party systems not controlled by Mecasimetra should normally be directed to the responsible provider, unless the issue arises from Mecasimetra's integration or configuration.

---

© 2026 Mecasimetra Systems & Kappology.
