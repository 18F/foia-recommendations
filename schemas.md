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


## FOIA metadata JSON file

In order for a National FOIA Platform to submit requests to an agency, the
agency must publish a FOIA metadata JSON file. [Project Open
Data](https://project-open-data.cio.gov/v1.1/schema/) is an example of
a metadata file schema that allows for open government datasets to be
cataloged by third-parties.

The FOIA metadata file should instruct the Platform:
- what methods for submission are supported by the agency
- what additional fields are required for a perfected request
- what additional fields the agency would like to collect
- explanation of additional requirements†
- FOIA contact information

_† Our research has shown that users often find additional requirements for FOIA
submission confusing and burdensome. We hope that by having agencies include
supplemental information about the requirements, it will help inform requesters
and allay any concerns._

* submission methods
  * submission format
* reading room URL
* FOIA contact information
  * name
  * title
  * address
  * phone
  * fax
  * email
  * website
  * notes
  * FOIA service center
    * name
    * phone
  * FOIA public liason
    * name
    * phone

FOIA Contact information is meant to include what already exists on foia.gov.

You can see [example metadata files
here](https://github.com/18F/foia-recommendations/tree/master/examples).

The schema for this metadata file is partially inspired by the [2015 FOIA
work](https://github.com/18F/2015-foia/tree/master/contacts/data) around
collecting contact information.


### Submission methods

A list of methods that the agency supports for receiving a FOIA request. Each
method represents a different format. Example formats include `usps`, `fax`,
`email`, `web`, and `platform`.


#### Platform

If the agency wants to receive requests through the National FOIA Platform, they
can include a `submission_method` with the `submission_format: platform`.

The agency can specify additional information to be collected by the platform by
specifying these optional fields.

  * required form fields
    * name
    * label
    * URL to the regulations requiring additional information
    * help text
  * additional form fields
    * name
    * label
    * help text
  * uiSchema describing form presentation


##### uiSchema for form presentation

In order to present the form to the requester as the agency intends, the agency
can include a limited version of
a [uiSchema](https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object)
that can be used to describe how the additional fields should be rendered.

* ui:order
* field(s)
  * ui:widget
  * ui:placeholder
