#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

statifileauth_path=${1:-Staticfile.auth}
echo "$STATICFILEAUTH" > "$statifileauth_path"
