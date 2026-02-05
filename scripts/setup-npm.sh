#!/bin/bash
# Remove old lock file
rm -f package-lock.json npm-shrinkwrap.json

# Generate new lock file with npm install
npm install --legacy-peer-deps

echo "✓ npm dependencies synced successfully"
