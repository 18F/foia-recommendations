# FOIA Form Wizard Prototype

A Jekyll template for prototyping [US Web Design
Standards][uswds-site] based websites.


## Prerequisites

This site uses [Jeykll][jekyll-site] to build and serve the website
and [npm][npm-site] to manage dependencies.

- Install npm with [Node][node-download]
- Install [Bundler](https://bundler.io/) with `gem install bundler`


## Usage

Install the dependencies and start the development server.

    $ bundle install
    $ npm install
    $ npm run build
    $ npm run serve

Open your browser to [http://localhost:4000/](http://localhost:4000/).

## FOIA contact data

By default the build process will assume that the repo at git@github.com:18F/2015-foia.git
is checked out at the same directory level as the foia-recommendations repo. You can
override that default by setting the `FOIA_AGENCY_DIR` environment variable
to wherever you have `2015-foia/contacts/data` located on your local file system.


[jekyll-site]: https://jekyllrb.com/
[node-download]: https://nodejs.org/en/download/
[npm-site]: https://www.npmjs.com/
[uswds-site]: https://standards.usa.gov/
