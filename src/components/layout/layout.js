import React from 'react'
import './layout.scss'
import NavBar from '../navbar/navbar'


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
                <section>
                    <h1>FOOTER/NAV HERE</h1>
                </section>
            </footer>
        </div>
    )
}

export default Layout