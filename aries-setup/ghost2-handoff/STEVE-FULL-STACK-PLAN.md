# Aries Full-Stack Deployment — Target: Steve's Laptop

**Executor:** the Claude Code session on **`ghost2` (mini2.local, Mac mini M4)** —
it has the `Steves-CC-ssh` key and LAN reachability. This container cannot run it.

**Goal:** replicate the `aries-core` stack (as built on ghost2 on 2026-06-10) onto
Steve's laptop, connected to **steve@restorationdoctors.com**, and add the
**4×/day briefing** that was the original ask.

**Source of truth:** the private repo **`github.com/FrankDark007/aries-core`** already
contains the working stack. Prefer **cloning it** over rebuilding from scratch.

---

## ⚠️ Confirm before Phase 0 (do not skip)

1. **Which host is Steve's laptop?** Candidates seen: `aries.local` (the mini
   session wrote instructions to its Desktop) vs. an M5 laptop hostname. Run
   `ssh <target> "scutil --get LocalHostName && sw_vers && whoami"` and confirm
   it's Steve's machine, not ghost2 and not the wrong node.
2. **Steve consents / is signed in.** This installs background services and wires
   in his Google account. It's his machine — confirm he's OK with it.
3. **Ports & names must not collide with ghost2's tunnel.** Steve's laptop needs
   its **own** Cloudflare tunnel hostname — do **not** reuse `atlas.vaserv.pro`
   (that routes to ghost2).

---

## Phase 0 — SSH in + preflight
- `ssh <STEVE_HOST>` using the existing `Steves-CC-ssh` key/alias.
- Check prerequisites: `brew --version`, free ports (`lsof -i :5432 -i :5678`),
  and whether any `com.flooddoctor.*` LaunchAgents already run.
- Install Docker engine if absent: `brew install --cask orbstack`, then
  `orbctl start` (headless). Verify `docker --version` && `docker compose version`.

## Phase 1 — Get the code
- `mkdir -p ~/Projects && cd ~/Projects`
- Clone the working stack: `git clone git@github.com:FrankDark007/aries-core.git`
  (GH CLI/SSH is already authed on ghost2; ensure the key is forwarded or the
  repo is cloned via a token the laptop has).
- `cd aries-core`

## Phase 2 — Secrets (.env) — never commit these
- Copy `.env` template and fill Steve-specific values:
  - `N8N_ENCRYPTION_KEY` → **generate fresh**: `openssl rand -hex 32` (do NOT
    reuse ghost2's key).
  - `POSTGRES_PASSWORD` → fresh value.
  - `TWILIO_AUTH_TOKEN`, `ANTHROPIC_API_KEY` → use Steve's own keys (the
    `Steves-CC-ssh` / a Steve-scoped API key), not ghost2's `Aries` workspace key.
- `chmod 600 .env`. Confirm `.env`, `postgres-data/`, `n8n-data/` are gitignored
  (last build accidentally staged the n8n key — amend before any push).

## Phase 3 — Docker infrastructure
- `docker compose up -d` → verify `aries-postgres` (5432) and `aries-n8n` (5678)
  are healthy (`docker ps`).

## Phase 4 — Database schema (Prisma v6)
- **Known landmine from last build:** n8n keeps ~107 tables in `public`. Running
  `prisma db push` on `schema=public` will **drop them**. Isolate app models in a
  dedicated **`aries` schema** (`DATABASE_URL=...?schema=aries`), exactly as the
  success report did. Verify n8n data intact after push.

## Phase 5 — Webhook routing (Cloudflare tunnel)
- Give Steve's laptop its **own** ingress hostname (e.g. `steve-aries.<domain>`),
  routing to `http://localhost:5678`. Do not reuse `atlas.vaserv.pro`.
- **Security:** put Cloudflare Access (or n8n auth) in front before pointing any
  webhook at it — the success report flagged this as an open follow-up.

## Phase 6 — Connect Steve's Google + 4×/day briefing (original goal)
- Authorize **steve@restorationdoctors.com** in Steve's Claude Code connectors
  (Gmail + Calendar) — confirm the consent screen shows Steve's address.
- Install the scheduled briefing from **`aries-setup/`** in this same repo
  (`install.sh` + `run-briefing.sh` + `briefing-prompt.md`) so Steve gets a
  briefing 4×/day. Set the 4 times to match the owner's Aries.

## Phase 7 — Verify + report
- `docker ps`, tunnel `HTTP 200`, one test briefing delivered to Steve's inbox.
- Confirm `launchctl list | grep aries` shows the briefing job.
- Write a `steve-aries-build-success.md` summary (mirror the ghost2 report).

---

## Deltas from the ghost2 build (call these out — easy to get wrong)
| Thing | ghost2 (done) | Steve's laptop (this build) |
|---|---|---|
| Encryption/DB secrets | ghost2's | **regenerate fresh** |
| API keys | `Aries` workspace | **Steve-scoped** keys |
| Tunnel hostname | `atlas.vaserv.pro` | **new, unique** hostname |
| Google account | — | **steve@restorationdoctors.com** |
| 4×/day briefing | not part of stack | **add via `aries-setup/`** |
