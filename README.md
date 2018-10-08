# National FOIA Site Research and Recommendations

## About

We are conducting research and prototyping in order to write recommendations about how to build the "consolidated online request portal” mandated in an amendment to the FOIA, the FOIA Improvement Act of 2016. At a minimum, our work requires learning how to let a user submit a FOIA request in one place to any and all parts of the federal government covered by the FOIA. We’re striving to understand how this can be done in a way that improves the system as a whole. _We prefer the terms "site" or "platform" instead of "portal;" however, because "portal" is a relatively antiquated term that can be confusing and mean something different to everyone._

If you would like to learn more about the project or provide feedback, sign up by emailing the Department of Justice's Office of Information Policy (DOJ OIP) at [National.FOIAPortal@usdoj.gov](mailto:National.FOIAPortal@usdoj.gov). They have also posted a [blog post about this project](https://www.justice.gov/oip/blog/oip-seeks-your-participation-development-national-foia-portal). You can also read our [interagency agreement](./interagency-agreement.md) for this project.

## The FOIA Improvement Act of 2016

The following two paragraphs are from the FOIA Improvement Act that are related to our work. Read the [full text of the Improvement Act](https://www.congress.gov/114/bills/s337/BILLS-114s337enr.xml) or an [edited version of the FOIA with changes tracked](https://www.justice.gov/oip/freedom-information-act-5-usc-552).

> (m)(1) The Director of the Office of Management and Budget, in consultation with the Attorney General shall ensure the operation of a consolidated online request portal that allows a member of the public to submit a request for records under subsection (a) to any agency from a single website. The portal may include any additional tools the Director of the Office of Management and Budget finds will improve the implementation of this section.

> (2) This subsection shall not be construed to alter the power of any other agency to create or maintain an independent online portal for the submission of a request for records under this section. The Director of the Office of Management and Budget shall establish standards for interoperability between the portal required under paragraph (1) and other request processing software used by agencies subject to this section.

## Build the prototypes

The prototypes require:

* Ruby 2.3.1
* Node package manager (npm)
* make

Once those prerequisites are installed, you can build the prototypes with:

```bash
 % make setup
 % make build
 % make run
```

See the README.md file in each prototype for more details.
