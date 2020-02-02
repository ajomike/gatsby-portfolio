import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <footer className="pt-3 pb-3 alert-light">
        <div className="container d-flex align-items-center">
          <div className="copyright">
            &copy; {new Date().getFullYear()}
          </div>
          <div className="social ml-auto">
            <a href="https://www.linkedin.com/in/michaelescoto/" className="ml-2">
              <i className="fab fa-linkedin fa-2x"></i>
              <span className="sr-only">Twitter</span></a>
            <a href="https://github.com/ajomike" className="ml-2">
              <i className="fab fa-github fa-2x"></i>
              <span className="sr-only">Github</span>
            </a>
            <a href="https://codepen.io/ajomike/" className="ml-2">
              <i className="fab fa-codepen fa-2x"></i>
              <span className="sr-only">Codepen</span>
            </a>
          </div>
        </div>
      </footer>  
    )
  }
}

export default Footer;