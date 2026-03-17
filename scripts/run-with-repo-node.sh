#!/usr/bin/env bash

set -euo pipefail

NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

if [ -f ".nvmrc" ] && [ -s "$NVM_DIR/nvm.sh" ]; then
  unset npm_config_prefix NPM_CONFIG_PREFIX PREFIX prefix
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
  nvm use --silent >/dev/null 2>&1 || true
fi

exec "$@"
