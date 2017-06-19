#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

mkdir -p _site/assets/vendor

cp -R node_modules/uswds/src/fonts node_modules/uswds/src/img _site/assets/
cp node_modules/uswds/dist/js/uswds.min.js _site/assets/vendor/
cp node_modules/jquery/dist/jquery.min.js _site/assets/vendor/
