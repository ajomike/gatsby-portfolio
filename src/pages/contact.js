import React from "react"

import Layout from "../components/Layout"

const Contact = () => (
  <Layout>
    <div className="">
      <div className="container">
        <div className="col vh-100 d-flex flex-column justify-content-center align-items-center">
          <h1>Contact Me</h1> 
          <h2>
            <a href="mailto:ajomike@gmail.com" id="contact-email" className="text-dark">ajomike@gmail.com</a>
          </h2>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;