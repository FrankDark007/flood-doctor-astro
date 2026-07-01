# Aries Briefings — Setup for Steve's M5 Laptop

This folder installs **Aries** (a Claude Code scheduled task) on Steve's Apple
Silicon (M5) MacBook so it composes and emails him a briefing **4× per day**,
connected to his **steve@restorationdoctors.com** inbox — mirroring the setup on
the owner's machine.

How it works: macOS `launchd` wakes up 4 times a day and runs Claude Code in
headless mode (`claude -p ...`). Claude reads Steve's Gmail/Calendar through his
connectors, writes the briefing, and emails it to him.

```
launchd (4×/day)  ->  run-briefing.sh  ->  claude -p <briefing-prompt.md>  ->  email to Steve
```

---

## ⚠️ Two spots to mirror the owner's Aries exactly

You asked to "match mine exactly." Two things live only on the owner's machine,
so copy them over before/after install:

1. **The 4 times.** Edit `TIMES` at the top of `install.sh`. To read the exact
   times from the owner's Mac, run there:
   ```sh
   plutil -p ~/Library/LaunchAgents/com.aries.briefing.plist | grep -A2 Hour
   # or, if the owner uses cron instead of launchd:
   crontab -l | grep -i briefing
   ```
   Defaults below are 06:00 / 12:00 / 18:00 / 22:00 — replace them.

2. **The briefing prompt.** Replace `briefing-prompt.md` with the owner's exact
   prompt so the content/sections match. On the owner's Mac it's whatever text
   their `claude -p "..."` runs (check their `run-briefing.sh` / crontab entry).

---

## Prerequisites (do these on Steve's M5, signed in as Steve)

1. **Install Claude Code** (if not already):
   ```sh
   curl -fsSL https://claude.ai/install.sh | sh
   # then sign Steve in, once, interactively:
   claude
   ```
2. **Connect Steve's Google account** so Aries can read his inbox/calendar and
   send mail. In an interactive `claude` session run `/mcp` (or use the
   claude.ai connector settings for his account) and authorize **Gmail** and
   **Google Calendar** for **steve@restorationdoctors.com**.
   - Confirm it's Steve's account, not the owner's: the OAuth consent screen and
     the connected email must read `steve@restorationdoctors.com`.
   - Grant **send** scope if you want Aries to send automatically. Without it,
     Aries will create a **draft** in Steve's mailbox instead (still safe — he
     just clicks Send).
3. Make sure `claude` is on the PATH for launchd. Find it with `which claude`.

---

## Install

From this folder, on Steve's Mac:

```sh
cd aries-setup
# 1. edit TIMES + (optionally) briefing-prompt.md first — see above
# 2. run the installer
./install.sh
```

The installer:
- makes `run-briefing.sh` executable,
- writes `~/Library/LaunchAgents/com.aries.briefing.plist` with the 4 times and
  correct absolute paths,
- loads it into `launchd`.

## Test it right now (don't wait for 6am)

```sh
launchctl start com.aries.briefing      # fire one briefing immediately
tail -f ~/Library/Logs/aries-briefing.log
```

You should see Claude run and either an email land in
steve@restorationdoctors.com or a draft appear in his Drafts.

## Verify the schedule is live

```sh
launchctl list | grep aries             # should show com.aries.briefing
plutil -p ~/Library/LaunchAgents/com.aries.briefing.plist | grep -A2 Hour
```

## Uninstall / change times

```sh
launchctl unload ~/Library/LaunchAgents/com.aries.briefing.plist
# edit TIMES in install.sh, then re-run ./install.sh
```

---

## Notes & gotchas

- **Laptop asleep at a scheduled time?** `launchd` runs the missed job once when
  the Mac next wakes — so Steve won't silently lose a briefing, but the exact
  minute can slip if the lid was closed. For guaranteed on-time delivery even
  when closed, the job should run on an always-on machine or a cloud host
  instead of the laptop.
- **Only runs while Steve is logged in.** This is a per-user LaunchAgent by
  design (it needs his Google connectors). It does not run at the login screen.
- **Logs:** everything Aries does is appended to
  `~/Library/Logs/aries-briefing.log`. Check there first if a briefing is
  missing.
- **Permissions:** headless Claude is launched with a narrow `--allowedTools`
  allowlist (Gmail + Calendar read + compose) so it can run unattended without
  prompting. Widen it in `run-briefing.sh` only if the owner's prompt needs more.
