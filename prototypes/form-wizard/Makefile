build:
	npm run build

setup:
	bundle install
	npm install

run:
	npm run serve --watch

test:
	stat _site/assets/js/agencies.js > /dev/null
	bundle exec htmlproofer ./_site --check-html --disable-external
	npm test

.PHONY: build setup run test
