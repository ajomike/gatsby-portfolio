import React from "react"

import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta'

const Layout = ({children}) => (
  <main>
    <Meta />
    <Header />
    {children}
    <Footer />
  </main>
)

export default Layout;