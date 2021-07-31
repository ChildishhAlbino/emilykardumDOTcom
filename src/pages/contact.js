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
          <div className="contact" padding="20em">
              <img src="https://i.imgur.com/cWJwyXT.jpg" width="60%" padding="20em"></img>

          </div>
          <div className="contact2">

            
          </div>
          </div>
        </main>
      </Layout >
    )
  }
}

export default ContactPage
