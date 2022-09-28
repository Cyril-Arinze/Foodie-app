import React from 'react'
import logo from "../../assests/logo.svg"
import NavLinks from '../../Data/nav-links';
import { NavLink } from './NavLink';
import classes from "./SideBar.module.css"


const SideBar = props => {

    const sideBarLinks = NavLinks.map(navLink => {
        return <NavLink
            Name={navLink.className}
            href={navLink.href}
            icon={navLink.icon}
            item={navLink.id}
            id={navLink.id}
            key={navLink.id}
        />
    })

    return (
        <aside className={classes["side-bar"]}>
            <header className={classes.brand}>
                <div className={classes["brand_image"]}>
                    <img src={logo} alt="Logo"></img>
                </div>
            </header>
            <main>
                <nav>
                    <ul>
                        {sideBarLinks}
                    </ul>
                </nav>
            </main>
        </aside>
    )
}

export default SideBar;
