# Mecasimetra Access & Privilege Model

**Company:** Mecasimetra Systems & Kappology  
**Status:** Product security specification  
**Date:** 2026-08-20

## Principle

Mecasimetra separates ordinary customer activity from sensitive administrative and financial authority.

```text
BASIC USE
  = normal product interaction

PRIVILEGED USE
  = actions with elevated business, billing, security, verification, or financial impact
```

Every account begins with the minimum authority required for its role.

## Basic use

Basic users may be allowed to:

- view their own approved Meca Verify savings statistics;
- view service status and permitted reports;
- create and share 100-character business posts where enabled;
- manage their own non-sensitive profile fields;
- change ordinary notification preferences;
- view their own workspace information;
- access product documentation and support;
- view pricing/tier information applicable to their account; and
- use permitted product services within assigned budgets and policies.

Basic users may not by default:

- change billing ownership;
- modify pricing schedules or promotions;
- grant privileged roles;
- change business verification state;
- change payout destinations;
- authorize treasury transfers;
- access another customer's private data;
- access proprietary Mecasimetra internals;
- modify security controls; or
- export sensitive organization-wide data without permission.

## Privileged use

Privileged authority is granted only to specific business roles and only for the resources required.

Examples of privileged actions:

- add/remove workspace administrators;
- change organization-wide budgets or service policies;
- approve billing-account changes;
- manage verified-business evidence and verification reviews;
- change payout/wallet destinations;
- approve treasury or refund actions;
- manage API credentials and provider integrations;
- access sensitive audit or security reports;
- export organization-wide billing/accounting records;
- manage promotion eligibility where authorized by Mecasimetra; and
- perform release/security/operations administration.

## Suggested business roles

### Member

Basic product access only.

### Analyst

Basic access plus approved reporting and measurement views.

### Manager

May manage workspace settings, budgets, and team activity within defined limits.

### Billing Admin

May view invoices, billing records, pricing schedules, and payment settings. Does not automatically receive treasury signing authority.

### Organization Admin

May manage team roles and organization configuration, subject to protected-action controls.

### Security Admin

May manage security-sensitive organization settings and review security events.

### Treasury Approver

May approve eligible financial actions but should not alone control preparation, signing credentials, and reconciliation.

### Mecasimetra Operator

Internal role used only for narrowly scoped operational tasks. Internal operators do not automatically receive customer treasury authority.

## Protected-action controls

Privileged actions should use stronger controls than ordinary product use, including where appropriate:

- reauthentication;
- MFA/passkey requirement;
- explicit confirmation showing the action and impact;
- dual approval for high-impact financial or security actions;
- rate limits;
- transaction/value limits;
- cooling-off periods for payout destination changes;
- immutable or append-only audit events;
- notification to affected administrators; and
- rollback/recovery procedures where technically possible.

## Financial separation

No user role should gain treasury authority merely because it has general account administration access.

```text
billing visibility != payout authority
organization admin != treasury signer
AI agent != autonomous financial authority
```

Money movement remains:

```text
prepare -> review -> authorize -> sign -> execute -> reconcile
```

## Verification separation

Verified-business status is not self-issued.

A customer may submit or update verification information, but approval/revocation remains a separate Mecasimetra-controlled process with an auditable decision record.

## Social safety

Basic social use remains intentionally constrained:

- maximum 100-character post;
- Share is the only engagement action;
- no likes, comments, replies, follower counts, public reaction totals, or engagement scoring;
- reporting/moderation controls may exist separately from public engagement;
- no account receives elevated authority because of popularity or activity.

## Data access

Access checks should be enforced server-side. Hiding a control in the UI is not authorization.

Every request to sensitive business data should evaluate at minimum:

```text
actor
organization/account
role
resource
requested action
policy version
current session assurance
```

## Agent safety

Agents use service identities with scopes narrower than human administrator roles.

Agents must not be given broad credentials simply for convenience. Sensitive write actions require explicit tool/action allowlists, audit logs, and separate authorization where required.

## Default-deny rule

When the system cannot determine whether an action is permitted, the action is denied and logged rather than guessed.
