import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'
import Card from '../components/Card'

import projects from '../projects'

export default () => (
  <Layout>
    <div className="jumbotron">
      <div className="col-md-12 text-center py-5">
        <h1 className="display-4">Hi, my name is Michael.</h1>
        <p className="lead">I'm a totally hireable web developer in Phoenix, AZ.</p>
      </div>
    </div>
    
    <section id="about" className="p-3 p-md-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="mb-4">About Me</h3>
            <p>Hey there and welcome to my website. This is the section of the website where I tell you a little about myself but I have a whole about page that I need to fill out so I'm just going to leave this section pretty basic. Check out some websites that I've worked on below and when you're ready to learn more about me check out my <Link to="/about/">about</Link> page for some more info and fun facts.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="work" className="p-3 p-md-4">
      <div className="container">
        <h3 className="text-center mb-4">Work</h3>
        <div className="row">
          {projects.map(project => (
            <Card 
              key={project.title}
              title={project.title}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>  
      </div>
    </section>
  </Layout>
)
