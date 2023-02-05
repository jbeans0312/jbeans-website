import React from "react";
import PlanStyle from "./style/PlannerProject.module.css";
import thumb from "../images/plannerthumb.png";
export function PlannerProjectThumb(): JSX.Element {
    return (
        <div className={PlanStyle.thumb}>
            <div className={PlanStyle.imgborder}>
                <img className={PlanStyle.img} src={thumb}></img>
            </div>
        </div>
    );
}
