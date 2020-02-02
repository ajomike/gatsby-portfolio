import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  
  return (
    <main>
      <Meta 
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        siteUrl={data.site.siteMetadata.siteUrl}
      />
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;