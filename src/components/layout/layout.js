import React from 'react'
import './layout.scss'
import NavBar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <header>
                <NavBar></NavBar>
            </header>
            <div className="layout-content">
                {children}
            </div>
            <footer>
                © Emily Kardum 2021. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout