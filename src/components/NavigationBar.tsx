import React from "react";
import { NavLink } from "react-router-dom";
import NavStyle from "./style/NavigationBar.module.css";
export function NavigationBar(): JSX.Element {
    return (
        <div className={NavStyle.bar}>
            <h2 className={NavStyle.h2}>john&nbsp;</h2>
            <h1 className={NavStyle.h1}>Bean</h1>
            <nav>
                <ul className={NavStyle.ul}>
                    <li className={NavStyle.li}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? NavStyle.activelink : NavStyle.link
                            }
                        >
                            home
                        </NavLink>
                    </li>
                    <li className={NavStyle.li}>
                        <NavLink
                            to="contact"
                            className={({ isActive }) =>
                                isActive ? NavStyle.activelink : NavStyle.link
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