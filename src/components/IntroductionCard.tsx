import React from "react";
import CardStyle from "./style/IntroductionCard.module.css";
import selfie from "../images/profile-image-resize.jpg";
export function IntroductionCard(): JSX.Element {
    return (
        <div className="card">
            <img className={CardStyle.img} src={selfie}></img>
        </div>
    );
}
