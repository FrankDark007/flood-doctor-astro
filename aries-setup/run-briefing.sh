#!/bin/bash
#
# Aries briefing runner — invoked by launchd 4×/day.
# Runs Claude Code headless with Steve's briefing prompt; Claude reads his
# Gmail/Calendar connectors and emails (or drafts) the briefing.
#
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG="$HOME/Library/Logs/aries-briefing.log"

# launchd runs with a minimal PATH — add the usual spots where `claude`, node,
# and homebrew binaries live so the runner finds them.
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.local/bin:$HOME/bin:$PATH"

# Tools Aries is allowed to use unattended (no permission prompts). Adjust to
# match the owner's setup if their prompt needs more/less.
ALLOWED_TOOLS="mcp__Gmail__search_threads,mcp__Gmail__get_thread,mcp__Gmail__create_draft,mcp__Gmail__list_labels,mcp__Google_Calendar__list_events,mcp__Google_Calendar__list_calendars"

mkdir -p "$(dirname "$LOG")"
echo "=========================================" >> "$LOG"
echo "=== Aries briefing start: $(date) ===" >> "$LOG"

if ! command -v claude >/dev/null 2>&1; then
  echo "ERROR: 'claude' not found on PATH. Run 'which claude' and add its dir above." >> "$LOG"
  exit 127
fi

claude -p "$(cat "$DIR/briefing-prompt.md")" \
  --allowedTools "$ALLOWED_TOOLS" \
  --output-format text >> "$LOG" 2>&1

echo "=== Aries briefing done:  $(date) ===" >> "$LOG"
