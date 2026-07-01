# Handoff — paste this into the Claude Code session on ghost2 (the Mac mini)

The block below is written for the **ghost2** session, which can actually SSH into
Steve's laptop. Copy everything between the lines into that session.

---

> You are on ghost2 (mini2.local). Deploy the full Aries stack onto **Steve's
> laptop** over SSH, then add the 4×/day briefing. Do not run destructive steps
> without confirming state first; diagnose and self-correct terminal errors.
>
> **Step 0 — confirm the target.** SSH to Steve's laptop using the
> `Steves-CC-ssh` key. Run `scutil --get LocalHostName && sw_vers && whoami` and
> paste the result back. Confirm it is Steve's machine (not ghost2, not another
> node such as `aries.local` unless that IS Steve's laptop). Stop and report if
> unsure.
>
> **Step 1 — pull the plan.** From this repo
> (`github.com/FrankDark007/flood-doctor-astro`, branch
> `claude/aries-steve-m5-setup-33oo2w`), read
> `aries-setup/ghost2-handoff/STEVE-FULL-STACK-PLAN.md` and follow Phases 0–7.
> The stack source is the private repo `github.com/FrankDark007/aries-core`
> (clone it; don't rebuild). The 4×/day briefing installer is in `aries-setup/`.
>
> **Non-negotiables (from the last build's lessons):**
> - Regenerate ALL secrets for Steve — never reuse ghost2's `N8N_ENCRYPTION_KEY`,
>   DB password, or the `Aries` API key.
> - Use `?schema=aries` for Prisma — `schema=public` will drop n8n's 107 tables.
> - Give Steve's laptop its OWN Cloudflare tunnel hostname — do not reuse
>   `atlas.vaserv.pro`.
> - Never commit `.env`, `postgres-data/`, or `n8n-data/`.
> - Put Cloudflare Access / n8n auth in front before exposing the webhook.
>
> **Finish:** deliver one test briefing to steve@restorationdoctors.com, confirm
> `launchctl list | grep aries`, and write `steve-aries-build-success.md`.

---

## Why this bundle (and not me doing it directly)

This repo's web container has **no SSH client, no `Steves-CC-ssh` key, and no LAN
route** to Steve's laptop — so it physically can't be the executor. ghost2 has all
three. I prepared the plan + guardrails here; ghost2 runs it. Paste its output
back to me and I'll interpret/course-correct each phase.
