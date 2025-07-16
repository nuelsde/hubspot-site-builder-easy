#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE_DIR="$ROOT_DIR/src/new-hubspot-template"
OUTPUT_ZIP="$ROOT_DIR/ki-transformation-premium-hubspot-template.zip"

echo "Packaging new HubSpot template..."

# Check if template directory exists
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo "Error: Template directory not found at $TEMPLATE_DIR"
    exit 1
fi

# Remove existing ZIP if it exists
rm -f "$OUTPUT_ZIP"

# Create ZIP file
cd "$TEMPLATE_DIR"
zip -r "$OUTPUT_ZIP" .

echo "Template packaged successfully: $OUTPUT_ZIP"
echo "Ready for HubSpot upload!"