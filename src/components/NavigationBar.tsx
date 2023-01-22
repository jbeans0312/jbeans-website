import React from "react";
import { Link } from "react-router-dom";
import NavBarStyle from "./style/NavigationBar.module.css";
export function NavigationBar(): JSX.Element {
    return (
        <div className={NavBarStyle.bar}>
            <h1 className={NavBarStyle.h1}>john Bean </h1>
            <nav>
                <ul className={NavBarStyle.ul}>
                    <li className={NavBarStyle.li}>
                        <Link to="/" className={NavBarStyle.link}>
                            home
                        </Link>
                    </li>
                    <li className={NavBarStyle.li}>
                        <Link to="contact" className={NavBarStyle.link}>
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
