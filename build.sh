#!/bin/bash

# Install dependencies with no-frozen-lockfile
echo "Installing dependencies with --no-frozen-lockfile..."
pnpm install --no-frozen-lockfile

# Run build
echo "Building the project..."
pnpm run build
