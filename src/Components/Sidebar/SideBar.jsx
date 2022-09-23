import React from 'react'
import logo from "../../assests/logo.svg"
import NavLinks from '../Data/nav-links';
import { NavLink } from './NavLink';
import classes from "./SideBar.module.css"


function SideBar() {
    return (
        <aside className={classes["side-bar"]}>
            <header className={classes.brand}>
                <div className={classes["brand_image"]}>
                    <img src={logo} alt="Logo"></img>
                </div>
                {/* <span className={classes["brand_name"]}>Foodie</span> */}
            </header>
            <main>
                <nav>
                    <ul>
                        {NavLinks.map(navLink => {
                            return <NavLink
                                Name={navLink.className}
                                href={navLink.href}
                                icon={navLink.icon}
                                item={navLink.id}
                                id={navLink.id}
                                key={navLink.id}
                            />
                        })}
                    </ul>
                </nav>
            </main>
        </aside>
    )
}

export default SideBar;
