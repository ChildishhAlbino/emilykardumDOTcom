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

            </footer>
        </div>
    )
}

export default Layout