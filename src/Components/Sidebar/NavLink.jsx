import React from 'react';
import classes from "./SideBar.module.css";

export const NavLink = (props) => {
    return (
        <li >
            <a href={props.href} className={classes.active}>
                <i className={props.icon}></i>
                <span className={classes['nav_link']}>{props.item}</span>
            </a>
        </li>
    );
}
