build:
	cd prototypes/form-wizard && \
	bundle exec jekyll build && \
	npm run build

setup:
	cd prototypes/form-wizard && \
	bundle install && \
	npm install

.PHONY: build setup
