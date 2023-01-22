import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyle from "./style/NavigationBar.module.css";
export function NavigationBar(): JSX.Element {
    return (
        <div className={NavBarStyle.bar}>
            <h1 className={NavBarStyle.h1}>john Bean </h1>
            <nav>
                <ul className={NavBarStyle.ul}>
                    <li className={NavBarStyle.li}>
                        <NavLink to="/" className={NavBarStyle.link}>
                            home
                        </NavLink>
                    </li>
                    <li className={NavBarStyle.li}>
                        <NavLink to="contact" className={NavBarStyle.link}>
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
