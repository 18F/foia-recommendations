build:
	cd prototypes/form-wizard && \
	npm run build

setup:
	cd prototypes/form-wizard && \
	bundle install && \
	npm install

run:
	cd prototypes/form-wizard && \
	npm run serve

test:
	cd prototypes/form-wizard && \
	bundle exec htmlproofer ./_site --check-html --disable-external && \
	npm test

.PHONY: build setup run test
