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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? NavBarStyle.activelink
                                    : NavBarStyle.link
                            }
                        >
                            home
                        </NavLink>
                    </li>
                    <li className={NavBarStyle.li}>
                        <NavLink
                            to="contact"
                            className={({ isActive }) =>
                                isActive
                                    ? NavBarStyle.activelink
                                    : NavBarStyle.link
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
