import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <header>

            </header>
            <body>
                {children}
            </body>
            <footer>

            </footer>
        </div>
    )
}

export default Layout