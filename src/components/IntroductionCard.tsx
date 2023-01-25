import React from "react";
import CardStyle from "./style/IntroductionCard.module.css";
import selfie from "../images/profile-image-resize.jpg";
import { Text } from "@chakra-ui/react";
export function IntroductionCard(): JSX.Element {
    const text1 = new String(
        "I am a Computer Science student at the University of Delaware with a concentration in Data Science.\n\n"
    );

    const text2 = new String(
        "My programming experience is primarly in software development through React + Typescript, but I am currently learning MySql"
    );

    const text3 = new String(
        "(and improving my CSS skills through making this website!)\n\n"
    );

    const text4 = new String(
        "Below are the projects I have worked on, thanks for stopping by!"
    );

    return (
        <div className="card">
            <div className={CardStyle.center}>
                <div className={CardStyle.imgborder}>
                    <img className={CardStyle.img} src={selfie}></img>
                </div>
                <h1 className={CardStyle.h1}>Hey, I&apos;m Bean!</h1>
            </div>
            <div className={CardStyle.textblock}>
                <Text className={CardStyle.basetext}>
                    {text1}
                    {text2}
                    {text3}
                    {text4}
                </Text>
            </div>
        </div>
    );
}
