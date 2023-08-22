import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import {Helmet} from "react-helmet";

const Layout = ({children ,title, keywords, author, description}) => {
  return (
    <div>
        <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content={description}/>
              <meta name="keywords" content={keywords}/>
              <meta name="author" content={author}/>
              <title>{title}</title>
            </Helmet>
        <Header/>
        <main style={{minHeight:'80vh'}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}
Layout.defaultProps = {
    title:'Ecommerce',
    keywords:'Ecommerce, buy, sell, online',
    author:'Shivam',
    description:'Ecommerce website'
}

export default Layout