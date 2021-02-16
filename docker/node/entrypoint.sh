#!/bin/sh
set -e
pwd
ls -la
npm install
npm run build

exec "$@"
