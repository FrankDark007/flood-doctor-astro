# Aries — 10-Minute Setup (do this ON Steve's M5 laptop)

Follow these steps **on Steve's own MacBook, signed in as Steve**. Copy-paste
each command into the **Terminal** app (press `Cmd+Space`, type "Terminal",
hit Enter). Do them in order.

> ⚠️ This must be done on Steve's actual laptop, logged into **his** accounts.
> It cannot be done from another computer.

---

## Step 1 — Install Claude Code

Paste this and press Enter:

```sh
curl -fsSL https://claude.ai/install.sh | sh
```

Then start it and sign in when it opens the browser:

```sh
claude
```

Sign in with the account your Aries uses. Once you see the Claude prompt, you
can type `/exit` and press Enter to close it for now.

---

## Step 2 — Connect Steve's Gmail + Calendar

Start Claude again:

```sh
claude
```

Type this and press Enter:

```
/mcp
```

Authorize **Gmail** and **Google Calendar**. When the browser opens, **sign in
as `steve@restorationdoctors.com`** (double-check it's Steve's email on the
Google screen, not anyone else's). Approve access, then `/exit`.

---

## Step 3 — Get these setup files onto the laptop

If you don't already have this project on the laptop, clone it:

```sh
git clone https://github.com/FrankDark007/flood-doctor-astro.git
cd flood-doctor-astro/aries-setup
```

(If you already have the folder, just `cd` into `.../flood-doctor-astro/aries-setup`.)

---

## Step 4 — Install the 4×/day schedule

```sh
./install.sh
```

You'll see it confirm the label, paths, and the 4 times.

---

## Step 5 — Test it right now (don't wait for the scheduled time)

```sh
launchctl start com.aries.briefing
```

Then watch it work:

```sh
tail -f ~/Library/Logs/aries-briefing.log
```

Within a minute you should see Claude run and a briefing **email arrive in
steve@restorationdoctors.com** (or a **draft** appear in his Drafts, if send
access wasn't granted). Press `Ctrl+C` to stop watching the log.

---

## Step 6 — Confirm the schedule is live

```sh
launchctl list | grep aries
```

If you see a line with `com.aries.briefing`, **Aries is installed and
scheduled.** ✅ It will now send Steve a briefing 4× per day automatically.

---

## If something goes wrong

- **`command not found: claude`** → close and reopen Terminal, then retry. If it
  still fails, run `which claude` and tell me what it prints.
- **No email and no draft** → open the log: `cat ~/Library/Logs/aries-briefing.log`
  and send me the last 20 lines.
- **Wrong Google account connected** → run `claude`, type `/mcp`, remove the
  Google connection, and redo Step 2 signed in as Steve.

---

## Changing the times later

The times default to **06:00 / 12:00 / 18:00 / 22:00**. To match the owner's
Aries exactly, edit the `TIMES=(...)` line near the top of `install.sh`, then
run `./install.sh` again.
