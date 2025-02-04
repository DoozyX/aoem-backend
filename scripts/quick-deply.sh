#!/bin/bash
set -e

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd $SCRIPT_DIR/../

git fetch --all
git reset --hard origin/main
npm i
npm run build:clean
pm2 restart moepp-cites