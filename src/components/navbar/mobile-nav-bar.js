import React from 'react'
import { Link } from 'gatsby'
import './mobile-nav-bar.scss'
import { FaEllipsisH, FaHome } from "react-icons/fa";
import Logo from "../icons/logo";

const MobileNavBar = ({ items }) => {
    return (
        <div className="mobile-nav">
            <div className="mobile-nav-container">
                <input type="checkbox" id="mobile-nav-toggle"></input>
                {items.filter(it => it.collapsible === false).map(navBarItem => (
                    <Link className={navBarItem.className} key={navBarItem.slug} to={navBarItem.slug}>
                        <div>
                            <Logo />
                        </div>
                    </Link>
                ))}
                <div className="collapsible">
                    {items.filter(it => it.collapsible === true).map(navBarItem => (
                        <Link className={navBarItem.className} key={navBarItem.slug} to={navBarItem.slug}>
                            <div>
                                <h1>{navBarItem.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
                <label htmlFor="mobile-nav-toggle" className="toggle-arrow">
                    <FaEllipsisH></FaEllipsisH>
                </label>
            </div>
        </div>
    )
}

export default MobileNavBar