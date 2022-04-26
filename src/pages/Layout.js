import React from 'react'

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Layout() {
    return (
        <div className="layout">
            <Header className="header"/>
            <Main className="main"/>
            <Footer className="footer"/>
        </div> 
    )
  }
  
  export default Layout;