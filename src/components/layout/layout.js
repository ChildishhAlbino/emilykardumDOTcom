import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <header>

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