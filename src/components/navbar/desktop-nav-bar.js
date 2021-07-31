import React from 'react'
import { Link } from 'gatsby'
import './desktop-nav-bar.scss'
import Logo from "../icons/logo";


const DesktopNavBar = ({ items }) => {
    let navBarItemRender = (navBarItem) => {
        if (navBarItem.collapsible) {
            return <h1>{navBarItem.title}</h1>
        } else {
            return <Logo />
        }
    }
    return (
        <div className="desktop-nav">
            <div className="desktop-nav-container">
                {items.map(navBarItem => (
                    <Link className={navBarItem.className} key={navBarItem.slug} to={navBarItem.slug}>
                        {navBarItemRender(navBarItem)}
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default DesktopNavBar