import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
    <Link to="/" className="my-0 mr-md-auto font-weight-normal text-dark">
      <h5>Michael Escoto</h5>
    </Link>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link to="/about/" className="p-2 text-dark">
        About
      </Link>
      <Link to="/contact/" className="p-2 text-dark">
        Contact
      </Link>
    </nav>
  </header>
)

export default Header;