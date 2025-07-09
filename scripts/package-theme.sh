#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
THEME_DIR="$ROOT_DIR/src/templates"
OUTPUT_ZIP="$ROOT_DIR/hubspot-theme.zip"

rm -f "$OUTPUT_ZIP"
cd "$THEME_DIR"
zip -r "$OUTPUT_ZIP" .

