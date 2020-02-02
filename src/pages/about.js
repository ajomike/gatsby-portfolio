import React from "react"

import Layout from "../components/Layout"

import photo from "../images/michael.png"

const About = () => (
  <Layout>
    <div className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4 className="mb-3">About Me</h4>
            <img style={{
              width: '50%',
              maxWidth: '200px',
              height: 'auto',
              shapeOutside: 'circle()',
              float: 'left',
              margin: '0 1rem 1rem 0'
            }}
            src={photo} 
            alt="Michael Escoto"
            />
            <p style={{
              fontSize: '20px'
            }}>Congratulations, you've made it to the about page. This is the page where I tell you all about myself. Like what? Well, for starters I've been working in web development for the last five years. During that time I've primarly been focused on front end development.</p>
            <p style={{
              fontSize: '20px'
            }}>I've been fortunate to work on a lot of different types of projects so far which has exposed me to different methodologies and ways of thinking. I've done everyting from Angular to WordPress to Shopify and a few things in between. Currently I'm focused on improving my skills with React and overall JavaScript development.</p>
            <p style={{
              fontSize: '20px'
            }}>In addition to development work I can also string together a few sentences quite nicely and you can view some links to past writings down below. Journalism was and still is a passion of mine and while I started out in music journalism I can geek out from time to time and write about the latest in web development.</p>

            <h5>Experience</h5>
            <ul>
              <li>
                <b>Frontend Developer @ Parsus Solutions</b><br/>
                <small>March 2019 - Present</small>
              </li>
              <li>
                <b>Web Developer @ The James Agency</b><br/>
                <small>January 2017 - March 2019</small>
              </li>
              <li>
                <b>Jr. Web Developer @ Really Simple Inc.</b><br/>
                <small>September 2015 - December 2016</small>
              </li>
            </ul>
            <h5>Writing</h5>
            <ul>
              <li>
                <a className="text-dark" href="https://azbigmedia.com/wordpress-an-introduction-to-gutenberg/">WordPress: An introduction to Gutenberg</a>
              </li>
              <li></li>
              <li></li>
            </ul>
            <h5>About the Site</h5>
            <p>This site is built using the static site generator GatsbyJS, which is based on React. You can view the source code on <a href="https://github.com/ajomike/gatsby-portfolio">GitHub</a>. You may be thinking to yourself that the site looks a bit plain and you'd be right! I don't really do design. Fortunately, I've had the pleasure to work with some really great designers in my day and I'll leave color theory, typography and such up to the professionals.</p>
          </div>
          <aside className="col-sm-12 col-md-4">
            <h4 className="mb-3">Fun Facts</h4>
            <h5>Current Location</h5>
            <p>Phoenix, AZ</p>
          </aside>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;