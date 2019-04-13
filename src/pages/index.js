import React from "react"

import Layout from '../components/Layout'
import Card from '../components/Card'

export default () => (
  <Layout>
    <div className="jumbotron">
      <div className="col-md-12 text-center">
        <h1 className="display-4">Hi, my name is Michael.</h1>
        <h5>I'm a totally hireable web developer in Phoenix, AZ.</h5>
      </div>
    </div>
    <section id="about">
      <div className="container">
        <p></p>
      </div>
    </section>
    <section id="work" className="p-3 p-md-4">
      <div className="container">
        <h3 className="text-center">Work</h3>
        <div className="row">
          <Card title="Cliffs Hotel and Spa" 
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555188691/portfolio/cliffshotelandspa.png"
                link="https://cliffshotelandspa.com" />
          <Card title="Spinato's Pizzeria" 
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555188688/portfolio/spinatospizzeria.png"
                link="https://spinatospizzeria.com" />
          <Card title="Loft &amp; Manor" 
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555188690/portfolio/loftandmanor.png"
                link="https://loftandmanor.com" />
          <Card title="Safeguard Security" 
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555188688/portfolio/safeguardsecurity.png"
                link="https://www.safeguardsecurity.com/" />
          <Card title="Tilted Kilt" 
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555188690/portfolio/tiltedkilt.com.png"
                link="https://tiltedkilt.com/franchising/" />
          <Card title="Dr. Gingers"
                image="https://res.cloudinary.com/dssctsifq/image/upload/c_scale,w_768/v1555190524/portfolio/drgingers.png"
                link="https://drgingers.com" />
        </div>  
      </div>
    </section>
  </Layout>
)
