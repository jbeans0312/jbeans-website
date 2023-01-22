import React from "react";
import CardStyle from "./style/IntroductionCard.module.css";
import selfie from "../images/profile-image-resize.jpg";
export function IntroductionCard(): JSX.Element {
    return (
        <div className="card">
            <div className={CardStyle.center}>
                <div className={CardStyle.imgborder}>
                    <img className={CardStyle.img} src={selfie}></img>
                </div>
                <h1 className={CardStyle.h1}>Hey, I&apos;m Bean!</h1>
            </div>
        </div>
    );
}
