# FOIA Recommendations

## Introduction

The Department of Justice (DOJ) hired 18F to develop recommendations for fulfilling the [FOIA Improvement Act of 2016's](https://www.justice.gov/oip/oip-summary-foia-improvement-act-2016) directive to build a "consolidated online request portal that allows a member of the public to submit a request for records under subsection (a) to any agency from a single website."

After [extensive research](https://github.com/18F/foia-recommendations/blob/master/research-plan.md) that involved interviews with dozens of people who have filed FOIA requests and those who handle incoming requests in government, we developed the hypotheses and recommendations in this document. In short, we found that while a request platform alone cannot address the most significant challenges with FOIA, a single collection point for requests represents a unique opportunity to make significant improvements to the FOIA requesting system overall. Given limited time and resources, we recommend addressing the public's lack of confidence and understanding of the FOIA system in the short term by improving the usability of the request submission process and better preparing requesters for what to expect from the long and complicated process of fulfilling requests. In the long term, we recommend the portal seek to provide requesters with status updates and continuously improve the request submission process through usability testing and by working with agencies to identify opportunities for helping requesters create more easily fulfillable requests. Our recommendations are organized into the following major categories:

- [Interoperability: Schema and agency metadata](https://github.com/18F/foia-recommendations/blob/master/recommendations.md#interoperability-schema-and-agency-metadata)
- [Status](https://github.com/18F/foia-recommendations/blob/master/recommendations.md#status)
- [Making a request & agency selection](https://github.com/18F/foia-recommendations/blob/master/recommendations.md#making-a-request--agency-selection)
- [Search](https://github.com/18F/foia-recommendations/blob/master/recommendations.md#search)

This document includes a thorough explanation of our research findings, recommendations for addressing the most significant challenges in those areas, and the necessary user stories for fulfilling those recommendations. Importantly, this work would not have been possible without the insight and support we received from DOJ's Office of Information Policy, who we found to be a partner committed to improving FOIA for both requesters and agencies.

### The minimum viable product

In general, a minimum viable product is something intended to solve the most crucial user needs as soon as possible so that a team can test, validate, and improve. Minimum viable products (MVPs) will not satisfy everyone — almost by definition — but they are a foundation of the agile process. Releasing them as early as possible is important for mitigating risk: technical and design issues are identified and resolved more quickly and users are far more forgiving of a beta work in progress that improves over time.

**DOJ has prioritized the following user stories from our recommendations for the minimum viable product.** The stories are in the format of: As a [user personna], in order to [accomplish a goal], I need [to do an action]. Additional user stories are recommended throughout the document for later phases. You can follow our work in support of these stories [on GitHub](https://github.com/search?q=topic%3Afoia+org%3A18F&type=Repositories).

- As a FOIA office, in order to publish my metadata file as per the schema, I need a GUI form to walk me through each field in the metadata file.
- As an agency that uses a case management system, in order to receive requests from the portal, I need a RESTful HTTPS API spec and request payload schema that I can use to implement. _Note: 18F usually builds with a public API-first approach. As noted in the API spec, this API will be a read/write API that allows the public to file requests via API and read agency metadata. Requests will not be public._
- As an agency receiving requests via email, in order to receive requests from the portal and enter them quickly into my spreadsheet, I need a well-formatted email containing the request.
- As an agency that uses a case management system, I need a functioning portal request API so that I can receive requests directly into my case management system.
- As an agency that uses a case management system, I need integration testing of the portal request API so that I can be assured that requests flow directly into my system.
- As a requester, in order to provide a perfected request, I need a form that follows best practices for usability.
- As a requester, in order to submit my request to the right FOIA office the first time, I need an agency selector that helps me first select the agency, then drills down to the component level.
- As a requester, in order to feel like my request is being handled as quickly as possible, I need a confirmation page after submission with a summary of my request and what to expect next.
- As a requester, in order to create a request that can be processed quickly, I need to understand the difference between a simple and complex request at submission time.
- As a requester, in order to understand what to expect from the FOIA process, I need to understand the time it will likely take to get my records before I hit submit. (MVP likely uses historical processing time data.)
- As a requester, in order to submit my request to the right agency the first time, I need to understand why selecting the right FOIA office is important.

### Next steps

_Some of these overlap. Most will change over time._

-  **Gather public feedback:** We would like to gather public feedback. This will help us identify issues or flaws in our research and recommendations — as well as continue to build public trust and understanding of the challenges and complexities of improving the FOIA system.
-  **Discuss and prioritize user stories:** We have assigned a rating of small, medium, or large to the user stories based on how well understood the work is, the amount of risk (e.g., reliance on outsiders), and the level of effort. DOJ has reviewed the user stories and prioritized them as high, medium, or low priority.
-  **Identify steps of the user stories:** For the highest priority user stories, we will identify the steps a user would need to take to fulfill the outcome described in each user story. (For example, if a user story described ordering a pizza, the steps might include choosing toppings and side dishes, providing a delivery address, paying, and then tracking delivery progress.)
-  **Prioritize steps:** Through another prioritization exercise, we'll identify steps that are crucial to completing a user story and steps that can be completed in later releases. (To continue the pizza example, we might deprioritize choosing side dishes and tracking delivery progress, since those features aren't crucial steps for ordering a pizza.)
-  **Ideate on product features:** Based on the research, we will ideate on product features that the tool should offer so that users can complete each step. (In the example, if we were listing the features of the step of paying, we might identify paying with cash, check, Visa, and American Express.)
-  **Prioritize features:** We'll conduct a final prioritization exercise of the features. (In the example, we might decide that accepting checks and American Express are not crucial to launching the tool.)
-  **Start building and testing with users:** Finally, we will start building features. As we build, we'll continue to gather public feedback through regular usability testing. Then, we'll work with DOJ to prioritize making crucial usability improvements against building new features.

## Research and Recommendations

While doing research, we sought to understand a complete picture of the current challenges, or "pain points," that people face as they interact with FOIA. We interviewed agencies, requesters, and advocates. We then developed hypotheses about the FOIA system and built prototypes to test our ideas with users. You can read more about our research methods in our [research plan](https://github.com/18F/foia-recommendations/blob/master/research-plan.md).

Our focus areas are listed below with detailed recommendations and a review of our research.

### Interoperability: Schema and agency metadata

We were asked to:

-  "Research on the search and interoperability issues..."
-  "Provide high-level recommendations for agency requirements for which government-wide guidance may be necessary..."

#### Overview

Agencies' diverse missions, operations, and resources affect the volume, subject, and complexity of both the FOIA requests they receive and the maturity of their tools for managing and processing requests. This prohibits a one-size-fits-all solution for the portal.

Therefore, we must develop a common lexicon (i.e., the schemas) that agencies can use to describe their FOIA process and their requirements for accepting requests. We will store this information in a format (i.e., the agency metadata files) that will allow the portal to automatically generate each agency's form page.

There are several additional benefits to using this automated approach. One, it allows the portal to create a custom request form for every agency. Another is that this will allow us to quickly identify the most common form fields and prioritize them for usability testing and improvements. An automated approach also supports a goal that we identified at the beginning of the discovery, which is to minimize the burden on agencies for supporting the portal.

#### Recommendations

##### Implement a policy that every agency maintain a FOIA metadata file

The [agency metadata file](https://github.com/18F/foia-recommendations/blob/master/schemas.md#foia-metadata-json-file) is core to interoperability. It is a machine-readable file that describes the agency's existing FOIA process. The portal would possibly allow agencies to submit and edit this information through an interface in order to build this file. The portal can then read this file in order to understand how to interact with the agency's existing process — i.e., how to send agencies request data. Maintaining this information in a machine-readable format allows us to dynamically track agency progress towards universal support of the portal and other trends (like most frequently required form questions).

##### Encourage FOIA offices to accept requests from the portal by using case management systems with APIs

Agencies can minimize data entry by receiving request data directly into their case management systems. This is ideal for agencies that receive a high volume of requests, but requires agencies implement an [API for receiving requests](https://github.com/18F/foia-recommendations/blob/master/schemas.md#creating-a-request).

##### Encourage FOIA offices to implement the spec describing how to send status tracking information to the portal via our API

Many agencies are already tracking status via their case management systems. By using the portal's [API to update a request's status](https://github.com/18F/foia-recommendations/blob/master/schemas.md#tracking-a-request), requesters can keep track of their request without any change to the FOIA office's existing process. Providing status information is an important recommendation addressed in the next section.

#### User stories

The following stories are in the format of: As a [user personna], in order to [accomplish a goal], I need [to do an action]. Ratings of small, medium, or large are based on how well understood the work is, amount of risk and reliance on outsiders, and level of effort.

##### Agency metadata file

(L) As a FOIA office, in order to publish my metadata file as per the schema, I need a GUI form to walk me through each field in the metadata file.

- In order to specify what the common base set of information to collect from requesters at submission time across all agencies, I need all agencies to send me the first draft of metadata files.

(S) As a FOIA researcher, in order to track and compare FOIA processes at different agencies, I need the FOIA metadata file for any agency.

##### Request schema

(S) As an agency that uses a case management system, in order to receive requests from the portal, I need a RESTful HTTPS API spec and request payload schema that I can use to implement.

(S) As an agency receiving requests via email, in order to receive requests from the portal and enter them quickly into my spreadsheet, I need a well-formatted email containing the request.

- Work with agencies to identify what a plain-text well-formatted email looks like.
- Work with agencies to determine if having the request in CSV or other machine-readable format is more helpful.

(M/L) As an agency with an existing portal, in order to receive requests directly into my case management system via the national portal, I need the national portal to understand my existing portal's parameters and interact with it automatically. _(Note: To the extent agencies make any changes to their existing portals this solution will require them to ensure that such changes take into account interaction with the National FOIA Portal interface.)_

##### Status tracking schema

(S) As an agency that uses a case management system, in order to update requests from the portal with status information, I need a RESTful HTTPS API spec and status tracking schema that I can use to implement.

#### Findings and research

The following are survey responses from over 230 FOIA agency components reflect a complex technical landscape. These should be treated as rough estimates.

**Tools counted by agency**
![Tools counted by agency](https://github.com/18F/foia-recommendations/blob/master/img/byagency.png)

**Tools counted by request volume**
![Tools counted by request volume](https://github.com/18F/foia-recommendations/blob/master/img/byrequests.png)

##### Tools Counted by Agency

The FOIA technical ecosystem is diverse. Agencies support a variety of submission channels (email, web form, paper mail, fax), and manage those submissions using a variety of case management systems. The two biggest case management systems are FOIAXpress and FOIAonline, yet taken together, those two solutions manage less than half of all FOIA requests and represent less than half of all agencies that we surveyed. Based on our survey, a majority of agencies—representing a majority of FOIA requests—use custom or manual solutions, such as spreadsheets.

Heterogeneous systems like the current FOIA ecosystem require application programming interfaces (APIs) to achieve interoperability. 18F builds using an [API first mentality](https://apievangelist.com/2014/08/11/what-is-an-api-first-strategy-adding-some-dimensions-to-this-new-question/) which is well suited to the diverse nature of the FOIA technical ecosystem. The [18F API standards](https://github.com/18F/api-standards#using-ones-own-api) [describe using your own API](https://github.com/18F/api-standards#using-ones-own-api) as the best way to understand and address any weaknesses in the API. **The portal should implement and consume its own public APIs (with exceptions for security and privacy) as a basic stance within the FOIA ecosystem.**

To support the recommendations of this report, a necessary first step is a common standard or set of definitions for agencies to describe their systems and supported submission channels in a machine-readable format. **We recommend a common metadata schema definition that agencies can use to describe how they accept FOIA requests, how requesters can contact them, and the location of the agency responsive document reading rooms.** The metadata should be hosted at foia.gov and maintained by agencies through an interface in a secure account.

The [preliminary details of these schemas](https://github.com/18F/foia-recommendations/blob/master/schemas.md) are described in further detail in the FOIA GitHub repository. The schemas cover:

1. **Agency metadata file** used to describe an agency's existing FOIA process.
2. **Request data** which will be a common data format for submitting a request from the portal to an agency.
3. **Request status tracking data** used by agencies to communicate the status of a request back to the portal.

Details of how these schemas would serve specific features will be addressed in each section below.

Once we have a metadata file from every agency, the portal can provide a more consistent request form that can help improve requesters' experience and trust in the FOIA system without burdening agencies. Using these schemas, the national portal will augment existing agency processes, not replace them. We believe that having agencies describe their existing FOIA processes using a standard language provides a foundation for collecting better perfected requests on agencies' behalf and for future improvements to FOIA government-wide.

### Status

We were asked to:

-  "Help define a vision for this portal as well as a roadmap for… tracking the statuses of these requests…"
-  "Highlight what is important to prospective users who submit a FOIA request…"

#### Overview

In interviews and tests, one of our clearest findings was that requesters often experience distrust and a lack of insight into what is happening from the time of submission to the receipt of a response from the agency. Many frequent requesters believe their request will fall into a "black hole" unless they closely track and nudge it. They don't believe it is being handled as quickly as possible nor that time estimates are accurate.

Fortunately, we believe there is an opportunity to improve trust and understanding of the FOIA process by providing progress updates, including, at a minimum, information about what happens at each stage of the process.

#### Recommendations

##### Surface request status directly from case management systems

A uniform and standard way of presenting status to requesters, regardless of the underlying case management systems, would go a long way to increasing transparency and aligning user expectations with the realities of FOIA office workflows.

##### Send email confirmation for each submission, including a summary of the request and a link to the status tracker

Requesters consistently said that they would expect an email confirmation with details of their request. The email serves multiple purposes: a receipt that the request was successfully delivered, and an "inbox" reminder of the request with a link to further information.

##### Present FOIA office contact information clearly on the status page

Requesters want to know how to reach out to a human being if they have more questions, particularly if they want to intervene to narrow the scope of the request at particular status milestones (which is also usually in agencies' best interest).

##### Clarify how time estimates are created

The relationship between annually reported median processing times and estimated times needed to process specific requests can be confusing — to everyone. Clarify how numbers were calculated whenever times or dates are presented.

##### Articulate as many granular status milestones as reasonably possible

During usability tests, requesters consistently preferred seeing more milestones — and their meaning — rather than fewer, and indicated that more milestones increased their understanding of the agency process.

##### Send an email to requesters every time the status milestone changes

Consistent messaging, with a link to the status page, was a common request amongst the requesters we spoke with.

#### User stories

The following stories are in the format of: As a [user personna], in order to [accomplish a goal], I need [to do an action]. Ratings of small, medium, or large are based on how well understood the work is, amount of risk and reliance on outsiders, and level of effort.

##### Simple request receipt/status page

(S) As a requester, in order to know that my request has been received, I need a receipt/status page with a basic summary of my request (agency, date, subject).

- At this point, there is no status of the request, only a receipt containing the minimum of Request number and Date of submission.
- Additional details about the request may be included on the receipt/status page as appropriate.
- PII will not be included at this point. As more information is included, appropriate authentication mechanisms must be introduced.

(S) As a requester, in order to feel confident that my request was sent correctly, I want to receive an email confirmation after submitting my request.

- A basic summary of the request (agency, date, subject) may be included in the email.
- Email should contain a permanent link to the receipt page.
- Limited PII should be published in the email itself.

##### Content of the status page

(S) As a requester, in order to contact the FOIA office where my request was sent, I want to see all the contact information for the office on the request status page.

(S) As a requester, in order to understand and appreciate the FOIA process, I want to see a static explanation of each step on the status page.

- Need to be careful to indicate this is purely educational and will not be updated dynamically.

(M) As a requester, in order to get a sense of when I might expect my request to be completed, I want to see how my request was classified (simple or complex).

- Automatic classification would probably be difficult, but if this classification is performed at the outset of request handling, it would be ideal to provide a mechanism for agencies to update the classification within the portal itself. Syncing with the agency management system to make updates would be classified as an (L).

(S) As a requester, in order to get a sense of when I might expect my request to be completed, I want to see statistics or other historical data about how this agency processes requests, clearly explained and differentiated from real-time queue-based estimates.

(M) As a requester, in order to trust that the government is securing my information and protecting my privacy when I see more information about the details of my request, I need the permanent link to the summary of my request for my eyes only.

- Introduces an appropriate authorization mechanism based on the amount and sensitivity of information available on the status page.
- This has potential to add friction to the process.
- Could an authorization mechanism like login be introduced only \*after\* the request is created? If we do that, how to we verify the email address \*before\* submission?

(M) As a requester, in order to see a list of all my requests, I need a login account.

- Will require login.

##### Updating status

(S) As a FOIA official, in order to update the status/classification of a request in the portal, I want a mechanism to allow me to change a status/classification.

- Will require authentication mechanism for FOIA offices.

(M) As a requester, in order to maintain a sense of where my request is in its overall lifecycle, I want to receive an email notification whenever its status changes.

- This is dependent upon completing status update features.
- We don't want to duplicate efforts of any existing notification systems, or create more work for agencies for updating separate systems.

(L) As a FOIA official, in order to minimize the number of systems I must maintain, I want changes to my local case management system to automatically update the status of a request within the national portal.

- Requires interoperability of some kind. Some case management systems allow for the  ability to export reports, but some do not.
- Includes writing a spec for other mechanisms for automated status updates.

#### Findings and research

##### Initial request status

In usability testing, requesters were often shocked by estimated response times after submission, or guessed one to three week response times before submitting requests. New or infrequent requesters don't understand FOIA, the steps involved in fulfilling a FOIA request, or what makes a FOIA request simple or complex. Requesters primarily want to know when their request will be completed. Knowing if their request was determined to be simple or complex is important to understanding when their request will be completed.

When presented with detailed status steps of New, Assigned, Record Collection, Redaction, and Closed, users were able to describe reasonably what was going on at each step but were not confident that their assumptions were accurate. Requesters overwhelming preferred more detail and information about the status of their request and the stages of fulfilling requests.

_Screenshot from the status page prototype shown to requesters after submission._

##### Contact information

In interviews and testing, requesters want to contact the FOIA Officer assigned to their request at some point, often to "nudge" the request or get it "unstuck." In usability tests in which responses took significantly longer than a requester estimated (e.g., two months), some assumed they missed a step or did something wrong. Some requesters sought contact info after this point, often to figure out how to negotiate a faster response time.

How might having contact info for the FOIA officer help to get a request unstuck? Both frequent requesters and agency FOIA officers we spoke to indicated that negotiation of the scope of the request was a normal part of making a FOIA request. In interviews, most agencies said non-perfected requests were not a significant issue but said they often reached out to requesters when scope was broad or the request was unclear. **We believe this negotiation of scope is ongoing and when requesters perceive their request to be stuck on a particular step of the process, they may want to speak directly with the FOIA officer to simplify the request.**

For example, in one user interview, the requester spoke of an example where their request was stuck in Redaction. This was unexpected because they thought the documents being requested would not contain any sensitive information even though the request did not specifically mention this. Had the requester known earlier, they would have asked that the request not include documents with sensitive information.

In another example from usability tests, one requester saw the request was stuck in Record Collection and would have reached out to the FOIA officer to check how many pages were already collected. The requester was only expecting 100 pages at most of responsive documents so if Record Collection was delayed by pulling 7000 pages, they would have liked to shortcut the process. They said that whatever had been collected so far is likely good enough.

##### Notifications

In usability tests and interviews, requesters consistently stated that they expected to receive an email confirmation. They often expected it to have a link to a status tracking page or a page describing their request.

In usability tests, requesters expected to receive notifications by email every time their request moved to a new stage of the process.

##### Estimated dates for request completion

In our usability tests, new requesters mistakenly believed the annually reported median request processing times were based on real-time data (backlog) and specific to their request. Requesters wanted to use these median processing times to ballpark when their request would be completed but did not understand if their request was simple or complex.

In interviews, frequent requesters suggested that having an estimated date was of limited or no value, believing estimates are rarely accurate based on their experience.

From agency interviews, we learned that current events can have a significant impact on request volume and therefore, request processing times. This makes providing estimates potentially difficult.

### Making a request & agency selection

We were asked to:

-  "Help define a vision for this portal as well as a roadmap for... decreasing the amount of time it takes to submit and obtain outcomes of a FOIA request…"
-  "Highlight what is important to prospective users who submit a FOIA request using a structured request form…"

#### Overview

The FOIA request form is often a new requester's only introduction to FOIA. In testing, requesters struggled to understand time estimates, fees, expedited processing, and what would happen once they clicked "submit." Agencies reported that unclear or non-specific requests are not common but very time consuming. Conducting standard usability testing of forms and guidance — as well as working with agencies to understand and prevent common problems — will significantly improve the request process overall.

#### Recommendations

##### Create an improved, consistent request submission experience

- Identify the most common form requirements via agency metadata files
- Work with agencies to identify what makes requests easier to process
- Conduct usability testing and user research of form fields
- Encourage agencies to minimize unique requirements

##### Make it clearer that narrowly scoped requests may be processed more efficiently

Requesters sometimes assume that all records are digital and easily searchable, and do not understand the difference between a simple and complex request. The portal should clarify how agencies evaluate the complexity of a request and guide users to narrow the scope whenever possible and appropriate.

##### Ask for a minimum of PII

Many requesters prefer not to give more personal information than absolutely necessary. The portal should allow users to submit a FOIA request by providing the absolute minimum necessary PII.

##### Simplify finding existing responsive documents

Continue to encourage agencies to proactively publish indexable records. Prompt the requester within the submission form for methods of finding documents that they may not have already tried.

##### Set time expectations before the requester clicks "submit"

Help the user understand what makes processing a request time consuming before they submit the form and clearly present median processing times.

##### Help requesters identify the correct FOIA office

The interface work done on openFOIA is a good starting place for this area of improvement. The requester can clearly see that agencies may have multiple FOIA components, and can drill down into each to discover which office mostly likely has the records they are seeking.

#### User stories

The following stories are in the format of: As a [user personna], in order to [accomplish a goal], I need [to do an action]. Ratings of small, medium, or large are based on how well understood the work is, amount of risk and reliance on outsiders, and level of effort.

##### Create improved, consistent request submission experience

- Identify the most common form requirements via agency metadata files
- Work with agencies to identify what makes requests easier to respond to
- Conduct usability testing and user research of form fields
- Encourage agencies to minimize unique requirements

(M) As a requester, in order to provide a perfected request, I need a form that follows best practices for usability.

1. Agencies provide first draft of the metadata file
2. We identify the most common fields (based on metadata files and research)
3. We build form questions based on the above
4. We improve them with usability testing

(M) As an agency, in order to handle requests more efficiently, I need the form to guide requesters to make requests that are easier to process.

- As a requester, in order to create a request that can be processed more quickly, I need to understand what information I should include in the Description field of my request (ex: agency record system info)

(S) As a requester, in order to trust agencies aren't making the submission process unnecessarily onerous, I need to know which regulations the form requirements are based on (ex: link to eregs).

(S) As a requester, in order to feel like my request is being handled as quickly as possible, I need a confirmation page after submission with a summary of my request and what to expect next.

(S) As a requester, in order to feel like my request was submitted, I need a confirmation page after submission.

##### Make it clearer that narrowly scoped requests may be processed more efficiently

_Requesters sometimes assume that all records are digital and easily searchable, and do not understand the difference between a simple and complex request. Make it more clear how agencies evaluate the complexity of a request and provide suggestions on ways to reduce the scope._

(S) As a requester, in order to create a request that can be processed quickly, I need to understand the difference between a simple and complex request at submission time.

(S) As a requester, in order to trust the FOIA process and get less frustrated, I need to understand what is involved in fulfilling my request (ex: that not all agencies have digital records that are easily searchable)

##### Ask for a minimum of PII

_Many requesters prefer not to give more personal information than absolutely necessary. Make it possible to submit a FOIA request with only the PII necessary to fulfill my request._

(M) As a requester, in order to protect my personal information, I need to submit a request through the portal with only the PII necessary to fulfill my request (ex: name and email).

(S) As a requester, in order to trust that the government is committed to protecting my privacy and fulfilling my request quickly, I need to understand why additional PII might be needed to fulfill my request.

##### Make it easier for users to find existing responsive documents

_Continue to encourage agencies to proactively publish records. Prompt the requester within the submission form for methods of finding documents that they may not have already tried._

(S/L) As a requester, in order to find responsive documents faster or improve my request, I need to be notified at submission time that there might be existing responsive documents related to the request being submitted.

- As an agency, in order to reduce requests for information that have already been released, I need to notify users at submission time that there might be existing responsive documents related to request being submitted.

##### Set time expectations before the requester clicks Submit

_Help the user distinguish between a simple and complex request before they submit the form and clearly present median processing times._

(S) As a requester, in order to understand what to expect from the FOIA process, I need to understand the time it will likely take to get my records before I hit submit. (MVP likely uses historical processing time data.)

##### Help requesters identify the correct FOIA office

_The interface work done on openFOIA is a good starting place for this area of improvement. The requester can clearly see that agencies may have multiple FOIA components, and be able to drill down into each to discover which office mostly likely has the records they are seeking._

(S) As a requester, in order to submit my request to the right agency the first time, I need to understand why selecting the right FOIA office is important.

(S) As a requester, in order to submit my request to the right FOIA office the first time, I need to understand how to choose the right agency.

(S) As a requester, in order to submit my request to the right FOIA office the first time, I need an agency selector that helps me first select the agency, then drills down to the component level.

##### Require requester to verify email address

(M) As a FOIA office, in order to increase the signal to noise ratio of incoming requests from the portal, I want the email address of the requester to already be verified.

#### Findings and research

##### Identifying the correct FOIA office to submit

In interviews, frequent requesters reported that they do not have trouble finding the right agency for their request. In addition, agencies did not report that receiving requests that should have been sent to a different agency is a significant problem. And in testing, new requesters chose the agency that they would submit their FOIA request to based on results of Google searches. This is discussed further in the Search section.

When prompted to choose an agency component, new requesters were usually confused. They often looked for contact information before submitting a request.

New requesters were also confused when agencies had their own web form for request submission. In usability tests, when requesters selected a FOIAonline subscriber, for example, the transition (following a link to FOIAonline) was jarring. One requester assumed they had clicked the wrong link all together. Many were confused because they didn't understand the distinction between FOIAonline and the portal. This improved slightly when requesters were sent directly to an agency's form, instead of the FOIAonline homepage.

_Screenshot of the prototype testing a direct link for submission to an agency with their own web form for request submission._

We hope that providing a more consistent requester experience across agencies will help requesters understand FOIA and ultimately lead to more trust in how government is handling their requests.

In user interviews, frequent requesters often have a relatively deep understanding for the internals of how individual FOIA offices operate. This included what kinds of records they had as well as what kinds of record systems they had. Often requesters included keywords or example search queries they would like the FOIA officers to execute on their behalf.

##### Inconsistent experiences between agencies

Agencies use different submission mechanisms and format requirements. A few agencies don't accept email and channel electronic submissions through a web form.

Many agencies will actively work with requesters who have submitted a non-perfected request to help them perfect it.  However, this is not consistent amongst all agencies.  Frequent requesters said they preferred to have a good relationship with FOIA officers. The statute allows agencies to add additional requirements through regulatory process, but this is not well understood by requesters. They often see the additional requirements as intentionally burdensome and legally questionable. Agencies often collect additional information that can expedite or clarify the request before submission, but it is rarely clear to the requester why providing this information would be helpful.

**We believe these inconsistencies in the submission process creates distrust and that creating a consistent request submission experience across agencies — with links to regulations — will foster requester trust.**

##### Collection of private information

Some of this additional information collected by agencies contains sensitive PII. Some requesters fear this information might be used to target or retaliate against them. Many requesters prefer the highest degree of anonymity possible and use tools like MuckRock or hire third parties to file requests on their behalf.

Journalist and open government requesters often start from a position of distrust, since they are asking for information that the government has not already made public. Consequently, requesters are often dubious about whether differences in submission and response formats and requirements are due to technical limitations or to explicit policy decisions.

### Search

We were asked to:

-  "Help define a vision for this portal as well as a roadmap for improving citizens' ability to find existing documents…"
-  "Explore the potential for adding a search functionality across all federal websites and released FOIA documents…"

#### Overview

From our usability sessions, first-time requesters universally reached for common tools like Google web search as their first choice for finding government information. Requesters did not seek advanced search tools; however, if their web search identified a subject-specific tool, the requesters often used it.

Agencies face several challenges to making their responsive documents accessible to search engines, not the least of which is the lossiness of paper to digital conversion and inadequate OCR resources. Reducing barriers to publishing responsive documents and making government records accessible by common web search engines will reduce the need to make FOIA requests and/or improve the quality of FOIA requests.

Additionally, a repository of responsive documents could be used to better direct users to the agency most likely to hold a document they are searching for, by allowing users to browse a database of previously disclosed documents or via machine learning.

#### Recommendations

##### Enforce guidelines around indexable documents

DOJ already has issued guidance to agencies on proactive disclosures and the need to make published responsive documents indexable so that search engines can refer to them with permanent links. _See_ [OIP Guidance: Proactive Disclosure of Non-Exempt Agency Information: Making Information Available Without the Need to File a FOIA Request (March 16, 2015)](https://www.justice.gov/oip/oip-guidance/proactive_disclosure_of_non-exempt_information); [OIP Guidance: Using Metadata in FOIA Documents posted Online to Lay the Foundation for Building a Government-wide FOIA Library (March 12, 2013)](https://www.justice.gov/oip/blog/foia-guidance-11).  We have seen examples where reading rooms are not following these guidelines as well as they could be. We do not recommend creating a FOIA-specific search engine. Instead, focus on making published documents as friendly as possible to existing search engines.

##### Investigate a shared service for publishing documents

Some agencies suggest that they do not have the resources or face technical obstacles within their offices that prevent them from publishing documents. While this issue is broader than FOIA, FOIA could serve as a convening force in understanding whether there is merit to a shared publishing service. This shared service is not meant to exist as a single FOIA repository, but instead to simplify publishing documents by implementing existing best practices in a streamlined service.

#### User stories

The following stories are in the format of: As a [user personna], in order to [accomplish a goal], I need [to do an action]. Ratings of small, medium, or large are based on how well understood the work is, amount of risk and reliance on outsiders, and level of effort.

##### Finding documents

(M) As a requester, in order to find information in the way I normally search (e.g., Google), I need government agencies to post indexable/crawlable documents.

##### Better requests

(XL) As an agency, in order to minimize misdirected requests, I need requesters to receive agency recommendations for where to submit the request based upon the body of their request.

- The recommendations would only be as good as the universe of published information and records.
- Determining how much this is able to minimize requests is unclear and would require significant testing.
- This would require machine learning work that would require a significant level of effort.

(XL) As an agency, in order to improve the quality and decrease the quantity of FOIA requests, I need requesters to see recommendations for existing information and records while writing their request.

- The recommendations would only be as good as the universe of published information and records.
- Determining how much this is able to improve requests is unclear and would require significant testing.
- This would require machine learning work that would require a significant level of effort.

#### Findings and research

##### How first-time and infrequent requesters use search

In our usability sessions, first-time requesters always started a search for information using the tools with which they were already familiar. Specifically, they used common search engines like Google. In most cases, the fact that the requester was seeking government records or government information did not seem to factor into their choice of tools. Some requesters used advanced search techniques, like restricting search to only .gov sites using site:\*.gov.

First-time requesters did not consider FOIA an option unless they were prompted. In our test scenarios, some requesters wanted to reach out to GSA by phone when prompted to consider FOIA. Requesters in these sessions did not seek out electronic reading rooms.

The initial search influenced their decision about which agency to FOIA. After an exhaustive search, requesters were moderately confident they identified a single agency to submit their request to. See the Request section for more information about this.

**This is still an area for exploration. Do requesters find the records they are seeking through search engines? Are agencies publishing enough records?**

Frequent requesters we interviewed sometimes included keywords in their request or named specific record systems they want the FOIA officer to search. Some requesters interviewed described that it was common for experienced requesters to become familiar with agency record systems. Including this information up front in their request led to better results, in their opinion. Some requesters noted that having an agency-provided channel to the record system would "cut out the middleman" and help them avoid filing a FOIA request. For new and infrequent requesters, we noted in usability sessions that requesters were happy to use existing tools when they encountered them. In some cases, Google search pointed the requester to subject-specific tools like [GSA's Lease Inventory E-tool](https://www.gsa.gov/portal/content/100783). Some users took advantage of FOIAonline's search as part of exploring GSA's online FOIA submission (currently FOIAonline). **We believe that although creating a FOIA document search will not meet the needs of requesters, providing requesters access to tools and record systems would help reduce the need to make a FOIA request.** Many record systems are not public and contain sensitive information and should not be made public. However, this represents an area for continued exploration in how to provide the public with safe access to their own records as well as public record systems.

##### Agency challenges to public record search

In order for records to be easily accessible by search engines, they must be indexable. This means 1) the content of the record must be machine-readable and 2) the records must have a canonical URL (i.e., a permalink) to identify it. OIP guidance already includes information on [making documents indexable](https://www.justice.gov/sites/default/files/oip/legacy/2014/07/23/proactive-disclosures.pdf#_PAGE13).

Making records machine-readable can be challenging depending on the nature of the records. Limiting factors include: if the record is not yet digital, if the record contains sensitive information that must be redacted, or if the record contains images, tables, or other media that requires special Section 508 processing. Commercial off-the-shelf (COTS) tools exist, but their features are often limited to optical character recognition (OCR) and may not cover every agency's requirements. Because of the unique needs of individual agencies, it is difficult or impossible to recommend a single set of features that meet every agency's requirements for Section 508 compliance. **We believe this is an area for improvement.** A commercial vendor might be incentivized to build a product that meets a set of features that would be useful to a broad number of agencies rather than have to build bespoke products for each individual agency.

Once records are machine readable, they must be posted on the agency's website. For many agencies, this involves working with another team like IT in order to publish responsive documents. OIP found that during the [proactive disclosure pilot](https://www.justice.gov/oip/reports/proactive_disclosure_pilot_assessment/download), the increased frequency of publishing documents strengthened the relationships between these teams. Reducing this friction is essential to getting more documents published.
