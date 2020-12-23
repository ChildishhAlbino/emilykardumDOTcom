import React from 'react';
import './footer.scss'
import { Link } from 'gatsby'
import { FaHome } from "react-icons/fa";

const Footer = () => {

    let navBarItems = [
        {
            title: "About", slug: "/about", className: "navbar-item", collapsible: true,
        },
        {
            title: "Portfolio", slug: "/portfolio", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Contact", slug: "/contact", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Placeholder", slug: "/placeholder", className: "navbar-item", collapsible: true,
        },
        {
            title: "Home", slug: "/", className: "navbar-item logo", collapsible: false,
        }
    ]

    let navBarItemRender = (navBarItem) => {
        if (navBarItem.collapsible) {
            return <h1>{navBarItem.title}</h1>
        } else {
            return (<h1><FaHome></FaHome></h1>)

        }
    }
    return (
        <div className="footer-nav-container">
            {navBarItems.map((navBarItem, index) => (
                <Link className={navBarItem.className} key={`${navBarItem.slug}-index`} to={navBarItem.slug}>
                    {navBarItemRender(navBarItem)}
                </Link>
            ))}
        </div>
    )

}

export default Footer