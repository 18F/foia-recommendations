# FOIA Schemas

These are works-in-process as we evaluate opportunities for interoperability amongst the various
existing applications in the FOIA ecosystem.

We delineate two request schemas because there are two distinct perspectives on the data: one for creating a request, and another for tracking a request. The first is a subset of the second.

## Creating a request

Based on the form at
https://foiaonline.regulations.gov/foia/action/public/request/createRequest these minimal fields are required:

* agency name
* requester name
* requester mailing address
* requester will pay up to max processing fee
* description
* fee waiver?
* expedited?

Then these additional, optional fields are present:

* requester organization
* requester email
* requester phone
* requester fax
* attachments

Written as an example SQL schema, this might look like (ignoring any normalization for things like agency, and if files or filepaths are stored in the database):

```sql
 agency_name            | character varying(255)      | not null
 requester_name         | character varying(255)      | not null
 requester_address      | text                        | not null
 max_fee                | money                       | not null default 0.00
 description            | text                        | not null
 fee_waiver             | boolean                     | not null default false
 expedited              | boolean                     | not null default false
 organization           | character varying(255)      |
 email                  | character varying(255)      |
 phone                  | character varying(255)      |
 fax                    | character varying(255)      |
 attachments            | text                        |
```

## Tracking a request

This gets into the realm of case management, for which there are many existing solutions, depending on who is doing the tracking (the requester or the agency). This is the space where things like status and timestamps and metadata *about* the request are important.

So, to extend our example from above, with the same caveats about normalization:

```sql
CREATE TYPE possible_statuses AS ENUM ('new', 'assigned', 'pending', 'closed');
CREATE TYPE possible_submission_types AS ENUM ('usps', 'fax', 'email', 'online_form');

 id                     | integer                     | not null -- internal private id
 reference_id           | uuid                        | not null -- public id
 agency_name            | character varying(255)      | not null
 requester_name         | character varying(255)      | not null
 requester_address      | text                        | not null
 max_fee                | money                       | not null default 0.00
 description            | text                        | not null
 fee_waiver             | boolean                     | not null default false
 expedited              | boolean                     | not null default false
 organization           | character varying(255)      |
 email                  | character varying(255)      |
 phone                  | character varying(255)      |
 fax                    | character varying(255)      |
 attachments            | text                        |
 status                 | possible_statuses           |
 assigned_to            | character varying(255)      |
 submitted_via          | possible_submission_types   |
 date_filed             | timestamp without time zone |
 date_due               | timestamp without time zone |
 date_acknowledged      | timestamp without time zone |
 created_at             | timestamp without time zone | not null -- about the record, not the request
 updated_at             | timestamp without time zone | not null -- about the record, not the request
```

