import React from "react";
import { ExternalLink } from "react-external-link";
import gitlogo from "../images/gitlogo.png";
import linklogo from "../images/linkedinlogo.png";
import NavStyle from "./style/NavigationBar.module.css";
export function NavigationBar(): JSX.Element {
    return (
        <div className={NavStyle.bar}>
            <h1 className={NavStyle.h1}>John Bean</h1>
            <nav>
                <div className={NavStyle.iconbar}>
                    <ExternalLink href="https://github.com/jbeans0312">
                        <img src={gitlogo} className={NavStyle.icon}></img>
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/john-t-bean/">
                        <img src={linklogo} className={NavStyle.icon}></img>
                    </ExternalLink>
                </div>
            </nav>
        </div>
    );
}
