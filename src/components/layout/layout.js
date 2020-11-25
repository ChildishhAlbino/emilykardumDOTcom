import React from 'react'
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <header>
                <section>
                    <h1>LOGO/NAV HERE</h1>
                </section>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <section>
                    <h1>FOOTER/NAV HERE</h1>
                </section>
            </footer>
        </div>
    )
}

export default Layout