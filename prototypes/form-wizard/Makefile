agencies:
	bundle exec ruby bin/build-agencies-js.rb

build:
	npm run build
	bundle exec jekyll build

dist:
	npm run build
	bundle exec jekyll build --baseurl "https://foia-form-wizard.app.cloud.gov"

setup:
	bundle install
	npm install

run:
	npm run serve

test:
	stat _site/assets/js/agencies.js > /dev/null
	bundle exec htmlproofer ./_site --check-html --disable-external
	npm test

.PHONY: build setup run test
