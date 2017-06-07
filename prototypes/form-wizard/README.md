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

The `agencies.js` file is built and checked into git. If you need to rebuild it,
you will need to disable the `safe` setting in `_config.yml` and make sure
you have the repo described below.

By default the build process will assume that the repo at git@github.com:18F/2015-foia.git
is checked out at the same directory level as the foia-recommendations repo. You can
override that default by setting the `FOIA_AGENCY_DIR` environment variable
to wherever you have `2015-foia/contacts/data` located on your local file system.

## Deployment

This prototype is deployed as a static application to
[cloud.gov](https://cloud.gov/) behind Basic authentication. Team members should
request the username/passphrase from their teammates.

The Basic authentication is configured via `Staticfile.auth` and is configured
in our continuous deployment pipeline. The `$STATICAUTHFILE` secret environment
variable must be set. To create the `$STATICAUTHFILE` hash, use `mkpasswd` or
`htpasswd` as available.

1. `mkpasswd -m sha-512 "your secret passphrase"`
   This creates a hash that looks something like
   `$6$asdfjkl$ljklsajfkldsjakfldjaklfjdskalfdsaljfkdlsaajfkdlsaf`
2. Prepend the hash with the username and `:`.
   `userbob:$6$asdfjkl$ljklsajfkldsjakfldjaklfjdskalfdsaljfkdlsaajfkdlsaf`
3. Set `$STATICAUTHFILE` to this value. Be sure to shell escape it as
   appropriate. In CircleCI, this means escaping all the `$` characters as `\$`.
   `userbob:\$6\$asdfjkl\$ljklsajfkldsjakfldjaklfjdskalfdsaljfkdlsaajfkdlsaf`


[jekyll-site]: https://jekyllrb.com/
[node-download]: https://nodejs.org/en/download/
[npm-site]: https://www.npmjs.com/
[uswds-site]: https://standards.usa.gov/
