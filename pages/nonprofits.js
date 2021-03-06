import {Button, Container, Row, Col} from "react-bootstrap"
import Link from "next/link"
import {Timeline, Event} from "../components/Timeline";
import {FAQ} from "../components/FAQ";

class Nonprofits extends React.Component {
   render() {
      return (
         <>
         <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
        <h1 style={{color: 'white', alignSelf: 'center'}}>Nonprofit Organizations</h1>
        <div style={{margin: '20px'}}/>
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={12} md={8} lg={6} xl={6}>
                We know nonprofits provide immense value to our community. If you think custom technology would improve your organization, please
               let us know! It is our mission to make technology to help you accomplish your goals.                </Col>
            </Row>
        </Container>
        
        </div>
         
         
            <div className="application-links">
               <Button variant="outline" size="lg" href="https://forms.gle/TFvuDaA5JmbF2jUB9" target="_blank">
                  Apply Now
               </Button>{' '}
               <div className="application-links">
               or <Link href="contact-us"><a className="inline-link">contact us</a></Link> for more info
               </div>
            </div>
            <div style={{margin: '40px'}}/>
            
            <Timeline title="Application Process">
               <Event title="Initial Contact" date="Early July">
                  Reach out to our team to get started in our application process!
                  We are interested in hearing about your organization and potential
                  projects you may have in mind.
               </Event>
               <Event title="Informational Interview" date="Late July / Early August">
                   We will reach out to you to schedule an interview to discuss your project idea. We want to learn more about the problem, potential
                   users, and additional factors that relate to your product.
               </Event>
               <Event title="Project Selections" date="September">
                   The Hack4Impact board of directors will consider the feasibility of your project
                   and how well it suits our teams and timeline. We want to ensure we are the right people to tackle your problem.
               </Event>
               <Event title="Response" date="Late September">
                   We will let you know if we have chosen to take on your project.
                   If we do not select it on one year, we highly encourage you to apply again. Since we
                   are also a nonprofit organization, we face many similar resource
                   limitations as you, but are constantly growing in size and funds.
               </Event>
            </Timeline>

            <FAQ>
               <question ask="What types of projects do you undertake?">
                  Most of the projects we undertake are web applications. Common examples
                  of problems we tackle include volunteer tracking forms, member directories,
                  and data tracking softwares. Check out our <Link href="/projects"><a>projects
                  page</a></Link> to see some of our previous work, and feel free to contact
                  us with any project ideas!
               </question>
               <question ask="How much does this cost?">
                  These projects are free or low cost ($5- $15 / month) for the website
                  and hosting expenses. We are building software to better help you
                  serve your community, and we know how tight money can be so we try to
                  keep these expenses as low as possible.
               </question>
               <question ask="What does the project timeline look like?">
                  Most development begins at the start of the new year and continues
                  until around mid-April. Throughout all of this, we will remain in
                  constant contact with you to ensure that we are building an application
                  that you will want to use.
               </question>
               <question ask="How much involvement is expected from nonprofits?">
                  We strongly believe in continuous and transparent communication to ensure
                  that your project is something that you will be happy with. This means we
                  will be asking for constant feedback throughout the development cycle,
                  including check-ins and surveys.
               </question>
               <question ask="How does long term maintenance work?">
                  Once we hand the product off to you around mid-April, we want to give you time
                  to experiment with it and find anything that needs to be changed. Once we end
                  our school year in mid-June, we will no longer be able to make additions as easily
                  due to limited resources on our end. If you encounter bugs on the site, we will
                  attempt to correct these issues, but cannot guarantee that we will be able to.
               </question>
            </FAQ>
         </>
      )
   }
}

export default Nonprofits;
