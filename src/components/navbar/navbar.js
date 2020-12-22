import React from 'react';
import DesktopNavBar from './desktop-nav-bar';
import MobileNavBar from './mobile-nav-bar';
import './navbar.scss'

const NavBar = () => {

    let navBarItems = [
        {
            title: "About", slug: "/about", className: "navbar-item", collapsible: true,
        },
        {
            title: "Portfolio", slug: "/portfolio", className: "navbar-item", collapsible: true,
        },
        {
            title: "Home", slug: "/", className: "navbar-item logo", collapsible: false,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Contact", slug: "/contact", className: "navbar-item", collapsible: true,
        }
    ]
    return (
        <div className="navbar-wrapper">
            <DesktopNavBar items={navBarItems}></DesktopNavBar>
            <MobileNavBar items={navBarItems}></MobileNavBar>
        </div >
    )
}

export default NavBar