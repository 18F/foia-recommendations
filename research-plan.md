# FOIA platform research plan

_This is a living document. It will be updated over the course of the coming weeks as we learn more from our users and as we hone in our hypotheses._

We started by working with DOJ and OMB to identify a vision for the platform that would serve as the focus for our research: “An easy way for people to access government information. If existing information isn’t found, to submit and track a FOIA request, helping the requestor to send an easily answerable request to the right agency.”

We then conducted a thorough review of materials already in place on the web and interviews with dozens of people who have filed FOIA requests and those who handle incoming requests, we developed hypotheses. Our hypotheses were focused on the FOIA system in general, the primary challenges that users and stakeholders are facing, and possible ways to solve those challenges. We then built rough prototypes to test those hypotheses through usability tests with new and experienced FOIA requesters. We also met with agencies to identify issues or flaws in our interoperability hypotheses.

Based on our findings in those tests, we created the recommendations in this document and the user stories that we think are necessary for fulfilling those recommendations.

In short, our next steps are to prioritize those user stories, and then break down the top priority stories into features that we can start building. Those top priority user stories and the features that we build to support them will form our minimum viable product.

## Background

Initial research on National FOIA Portal. Attempting to focus on speaking to user groups who were not heavily represented in previous FOIA 1.0 research.

The goal of this research is to inform hypotheses that address the following:
- How might we create a platform that improves the FOIA requesting experience?
- How might we make it easier for the agencies to respond to requests?
- How might various FOIA requesters benefit from a national FOIA platform?
- How might agency processes be improved or enhanced by a national FOIA platform?

## User groups

### Requesters

- Business/Industry and regulated community
- Attorneys
- Individual first-time requesters
- Civic society
- Journalists
- University researchers

### Agencies and components

- High volume
- Low volume
- Agencies using major FOIA platforms (ex: FOIAOnline)
- Custom FOIA system
- Manual (ex: spreadsheets)
- High security systems

### Software vendors

## Methods

- 45m interviews
- Journey map: Mapping how of agencies and requesters think the process works
- Service blueprint: Neutral map documenting current process from both agency and requester perspectives.
- Usability testing (once prototype is built)
- Contextual inquiry (if time allows): Observing a FOIA requester as they file a request, follow up on existing request, and receive their responsive documents
- Diary study (if time allows): Asking a set of users to log all FOIA related activities over the lifecycle of a request.

## Interview guide

Note: Avoid detailing project scope until after the interview is complete.

### Requesters

- How often do you file FOIA requests?
- How do you decide to file a FOIA request?
- What are some things you do before filing a FOIA request?
- (If not addressed above: Do you search for existent publicly released documents before filing a FOIA request?)
- How do you identify which agency to submit your request
- How do you identify where to submit a request to an agency?
- How do you identify how to submit a request to an agency?
- Have you ever sent the same request to multiple agencies?
- How do you track the progress of your request?
- Have you experienced stalled requests? If so, what have you done in response?
- How often do you feel you've received what you were looking for at the end of the request process?
- What agencies have you interacted with that you have had a particular good experience with regard to FOIA?
- Have you ever had a particularly frustrating experience with a FOIA request? (Tell us about it)
- If you could wave a magic wand to address one issue in the FOIA space, what would that issue be?

### Agency

- Can you describe the steps involved in responding to a FOIA request?
  - What percent of your requests come in through paper mail, fax, email, web?
  - Does the format (paper mail, fax, email, web) affect how you handle it?
- What percentage of the requests you receive are:
  - For a record someone else has also requested?
  - Already publicly available?
  - Not perfected?
  - Should be directed elsewhere?
- How do you determine what documents will be published to a public reading room?
  - Are there any technical barriers to posting more documents online?
- If you could wave a magic wand to address one issue in the FOIA space, what would that issue be?

## MVP test for status

Two possible tests listed. I'm not entirely sure that we'd need to run through both.

### Brief

- Brief user on scenario in which they will file a (complex) request with the Department of State. The median response time for a complex request to State is 333 days.
- In scenario, user has just submitted a request online. They received an email after submitting.
- Show user mock-up of email with link to tracking site.

### Limited status

- Walk user through multiple points in request experience. Each one begins with an email at a point in the process indicating a change in status: new (immediate), assigned (1 week), pending (8 days-832 days), closed (333 days).
- Show user status page ("After clicking the link in the email you go here./After 4 months, you check the link and see this "pending" page)
- Ask user about what they see on the page, and how the information makes them feel. Ask if they would take any other actions at any point.

### Detailed status

- Walk user through multiple points in request experience. Each one begins with an email at a point in the process indicating a change in status: new (immediate), assigned (1 week), record collection (month 1-7), referral (month 8-9), redaction (month 10), closed (11 months).
- Show user status page ("After clicking the link in the email you go here./After 4 months, you check the link and see this "pending" page)
- Ask user about what they see on the page, and how the information makes them feel. Ask if they would take any other actions at any point.
- (Attempt to identify differences between two tests if any)
