import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

class ContactPage extends React.Component {
  state = { ...this.props }
  render() {
    return (
      <Layout>
        <SEO title="Contact Me!"></SEO>
        <main>
          <br></br><br></br><br></br>
          <h1>Contact Me</h1>
          <div className="contact-container">
          <div className="contact">
              <img src="https://i.imgur.com/cWJwyXT.jpg" width="100%" align="right"></img>

          </div>
          <div className="contact2" padding="10em" font-family="'Poppins', sans-serif" size="10pt">

        <p><span className="stress">Email address:</span> emilykardum@gmail.com</p>
        <p><span className="stress">LinkedIn Profile:</span> <a href="https://www.linkedin.com/in/emilykardum/" color="#5814BB"><b>Click here</b></a></p>
          </div>
          </div>
        </main>
      </Layout >
    )
  }
}

export default ContactPage
