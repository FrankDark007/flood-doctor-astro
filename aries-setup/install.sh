#!/bin/bash
#
# Installs the Aries briefing LaunchAgent on Steve's Mac.
# Run from this folder:  ./install.sh
#
set -euo pipefail

# ---------------------------------------------------------------------------
# EDIT ME: the 4 briefing times, as "HH:MM" (24h). Mirror the owner's exactly.
# Read the owner's times with:
#   plutil -p ~/Library/LaunchAgents/com.aries.briefing.plist | grep -A2 Hour
# ---------------------------------------------------------------------------
TIMES=("06:00" "12:00" "18:00" "22:00")
# ---------------------------------------------------------------------------

LABEL="com.aries.briefing"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RUNNER="$DIR/run-briefing.sh"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

if [ "${#TIMES[@]}" -ne 4 ]; then
  echo "Expected 4 times in TIMES, got ${#TIMES[@]}. Edit install.sh." >&2
  exit 1
fi

chmod +x "$RUNNER"
mkdir -p "$HOME/Library/LaunchAgents" "$HOME/Library/Logs"

# Build the <array> of StartCalendarInterval entries from TIMES.
intervals=""
for t in "${TIMES[@]}"; do
  hour="${t%%:*}"
  min="${t##*:}"
  hour=$((10#$hour)); min=$((10#$min))   # strip leading zeros safely
  intervals+="        <dict>
            <key>Hour</key><integer>${hour}</integer>
            <key>Minute</key><integer>${min}</integer>
        </dict>
"
done

cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>${LABEL}</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>${RUNNER}</string>
    </array>
    <key>StartCalendarInterval</key>
    <array>
${intervals}    </array>
    <key>StandardOutPath</key>
    <string>${HOME}/Library/Logs/aries-briefing.log</string>
    <key>StandardErrorPath</key>
    <string>${HOME}/Library/Logs/aries-briefing.log</string>
    <key>RunAtLoad</key>
    <false/>
</dict>
</plist>
PLIST

# (Re)load into launchd.
launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"

echo "Installed $LABEL"
echo "  plist:  $PLIST"
echo "  runner: $RUNNER"
echo "  times:  ${TIMES[*]}"
echo
echo "Test now:   launchctl start $LABEL && tail -f ~/Library/Logs/aries-briefing.log"
echo "Verify:     launchctl list | grep aries"
