# Platforms

_Non-authoritative FOIA research, curated by 18F, a digital delivery team in the
US federal government._

A number of public platforms have been built to process Freedom of Information requests. 

This list does not include proprietary or internal solutions that requestors do not see, such as [FOIAXpress](http://www.foiaxpress.com/).

We can't guarantee the accuracy of this page -- it represents initial research of team members, and could be incomplete or become out-of-date.


## MuckRock

_Updated: 2017-04-26_

[MuckRock](https://www.muckrock.com/) is an **unofficial**, **[open
source](https://github.com/MuckRock/muckrock)** platform for making FOIA
requests of various levels of government.

MuckRock publishes the results of [many FOI
requests](https://www.muckrock.com/foi/list/) online, and makes them searchable.
MuckRock has a [business model](https://www.muckrock.com/accounts/) based on
filing requests, scanning documents, supporting embargoed responses, and custom
plans for large organizations. Users are also able to crowdsource finances to
cover request fees.

MuckRock received some initial funding by the [Knight Foundation](http://www.knightfoundation.org/press-room/press-mention/knight-innovation-ard-win-selects-muckrock-25/), [Freedom of the Press Foundation](https://pressfreedomfoundation.org/organization/muckrock-news), and the [Sunlight Foundation](http://sunlightfoundation.com/about/grants/).

The platform was open sourced under the AGPL license in [November
2016](https://www.muckrock.com/news/archives/2016/nov/29/muckrock-goes-open-source/).


### Technology

- Hosted API
- Python/Django
- scikit-learn for document classification
- documentcloud.org for OCR
- django-watson for full-text search

MuckRock provides an [API](https://www.muckrock.com/api/) to access their data
including [some examples](https://github.com/MuckRock/API-examples) of how it
can be used. FOIA requests can also be submitted through this API. The
documentation seems limited.


## RecordTrac

_Updated: 2016-04-28_

[RecordTrac](http://records.oaklandnet.com/) is the **official**, **[open
source](https://github.com/codeforamerica/recordtrac)** portal for the City of Oakland, California.

It was [developed by Code for America's
fellows](http://www.codeforamerica.org/blog/2013/10/01/recordtrac-easy-access-to-public-records/)
working alongside the City of Oakland. It processes requests for California's
FOIA equivalent, the [California Public Records
Act](https://en.wikipedia.org/wiki/California_Public_Records_Act).

In Oakland, [every satisfied request](http://records.oaklandnet.com/requests) is made available to the public. Each request, such as [this request for the Mayor's schedule](http://records.oaklandnet.com/request/1172), has a history of requestor interaction, and each published [document](http://documents.scribd.com.s3.amazonaws.com/docs/7rzdav3ry834su4u.pdf?t=1384814759).

RecordTrac acts as a single repository for managing requests and responses. When
a request comes in, a notification is sent to the point of contact based on the
department identified in the request. Documents fulfilling requests are often
linked in the response or uploaded to scribd.com.

There doesn't appear to be any active development on RecordTrac.


### Technology

- Python/Flask
- PostgreSQL full text search (Request search only)


## FOIA Machine

_Updated: 2016-04-26_

[FOIA Machine](https://www.foiamachine.org) is an **unofficial**, **[open
source](https://github.com/cirlabs/foiamachine)** FOIA
portal. It is built and by the [Center for Investigative
Reporting](http://cironline.org/) (CIR) and operated by
[MuckRock](https://www.muckrock.com/).

[FOIA Machine joined
MuckRock](https://www.kickstarter.com/projects/cir/foia-machine/posts) in
November 2016:

> FOIA Machine will remain free to let users manually track their own requests,
> while MuckRock will continue to offer a “full service” experience that submits
> the requests directly to the agency, automatically follows up, and
> conveniently digitizes any responsive documents.

Aimed at an audience of journalists, users make FOIA requests through FOIA Machine, which then submits your request to any of multiple governments on your behalf. Users can track request status, and receive responses to their requests.

FOIA Machine was originally funded with a bit under $50,000 through a [prototype grant from the Knight Foundation](http://www.knightfoundation.org/grants/20102529/). CIR built an alpha with this funding, and then requested further funding through a [successful Kickstarter campaign](https://www.kickstarter.com/projects/cir/foia-machine) that raised a bit over $50,000.

~The site works, and there are [public
requests](https://www.foiamachine.org/requests/public/), but it's not clear how
information is released. Even the requests marked as "Fulfilled" have no visible
information for public download. Their
[updates](https://www.kickstarter.com/projects/cir/foia-machine/posts) indicate
progress is continuing.~

FOIAMachine appears to send form letters via email. Contact information for agencies is user submitted and very incomplete. Major agencies such as the Department of Treasury don't have contact info or are not disambiguated from state government entities with similar names.


### FOIAMachine Features
_(Per Kickstarter video)_

1.  Automates submission of requests
2.  Tracks requests
 * Logs important dates (i.e. date filed)
 * Reminders
 * Email alerts
3.  Aggregates information
 * Build information on improving request in the future
 * Tracks how well law is working



## iFOIA

_Updated: 2017-04-28_

[iFOIA](ifoia.org) is a **closed-source** platform that allows users to generate
new requests for information from state and federal offices. iFOIA requires
a user to register for an account and generate requests. This process guides
users through the entire information request process. Once complete, the user is
able to send the information electronically or print the completed request to
send offline.

Once completed, the user is able to maintain open and completed requests, as
well as share requests with others. One additional feature is an ability to
maintain information requests created outside of iFOIA and use the platform to
appeal a prior determination. However, responsive documents associated with
a completed request do not seem to be collected and made available to the public
through iFOIA.

This project was developed by the Reporters Committee for Freedom of the Press.


## Alavateli

[Alaveteli](http://www.alaveteli.org/) is an information request platform, built by the UK organization mySociety. It is an [open source](https://github.com/mysociety/alaveteli/) platform written in Rails, and the result of generalizing the platform they built for [WhatDoTheyKnow](https://www.whatdotheyknow.com/).

Alavateli has [extensive documentation](http://code.alaveteli.org/), a reasonably active [mailing list](https://groups.google.com/forum/#!forum/alaveteli-dev), and a [dedicated blog](http://www.alaveteli.org/blog/).

It's not obvious what the publication policy is for all requests on all deployed instances. On WhatDoTheyKnow, you can read the [full back-and-forth](https://www.whatdotheyknow.com/request/removal_of_entitlements_and_lack#comment-50953) between requestor and agency, and download released data.


## FOIAonline

[FOIAonline](https://foiaonline.regulations.gov/foia/action/public/home) is an **official**, **closed source** portal operated by the [Environmental Protection Agency](http://www.epa.gov/) (EPA).

FOIAonline allows citizens to request information directly from participating agencies. At time of this writing, there are 8: [National Archives](http://www.archives.gov/), [Commerce](http://www.commerce.gov/), [CBP](http://www.cbp.gov/), EPA, [FLRA](http://www.flra.gov/), [MSPB](http://www.mspb.gov/), [PBGC](http://www.pbgc.gov/), and the [Navy](http://www.navy.mil/). FOIAonline will be adding more agencies soon.

FOIAonline is funded at least in part through the financial support of participating agencies.

FOIAonline allows you to [search](https://foiaonline.regulations.gov/foia/action/public/search) FOIA requests that have been made through its system. It's not clear whether one can browse without knowing a search term in advance.

Requests that result in the release of records can make those records publicly available, as on this [FOIA request to the EPA](https://foiaonline.regulations.gov/foia/action/public/view/request?objectId=090004d28016293b). A "partial grant/partial denial", there are 126 documents attached to the request, mainly PDFs. There appears to be no requestor/agency discussion visible to the public, beyond the original request, nor any explanation for the partial grant/denial.


## Froide

[Froide](http://stefanw.github.io/froide/) is a Freedom of Information platform. It is an [open source](https://github.com/stefanw/froide) platform written in Python with Django 1.5. Froide was designed to mimic the functionality of [What do they know](http://whatdotheyknow.com/).

[According to the website](http://froide.readthedocs.org/en/latest/about/), Froide connects entities through a man-to-many relationship to allow the public body to be accountable under different laws. Requests are mailed to public bodies through the platform via a special, request-unique email address. It offers a read/write REST-API and redaction of PDFs.


## FOIA.gov

[FOIA.gov] (FOIA.gov) is a website maintained by the Department of Justice that focuses on providing information about the FOIA and its administration. The site publishes statistical information about the administration of FOIA, which comes from the [annual Chief FOIA Officer reports] (http://www.justice.gov/oip/reports-1). The site also publishes contact information for the various [FOIA offices] (http://www.foia.gov/report-makerequest.html) across the Federal government. 
