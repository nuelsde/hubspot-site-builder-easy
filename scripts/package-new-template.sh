#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE_DIR="$ROOT_DIR/src/new-hubspot-template"
OUTPUT_ZIP="$ROOT_DIR/ki-transformation-premium-hubspot-template.zip"
THEME_FILE="theme.json"

echo "Packaging new HubSpot theme..."

# Check if template directory exists
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo "Error: Template directory not found at $TEMPLATE_DIR"
    exit 1
fi

# Ensure theme.json exists
if [ ! -f "$TEMPLATE_DIR/$THEME_FILE" ]; then
    echo "Error: $THEME_FILE not found in $TEMPLATE_DIR"
    exit 1
fi

# Remove existing ZIP if it exists
rm -f "$OUTPUT_ZIP"

# Create ZIP file
cd "$TEMPLATE_DIR"
zip -r "$OUTPUT_ZIP" .

echo "Template packaged successfully: $OUTPUT_ZIP"
echo "Ready for HubSpot upload!"