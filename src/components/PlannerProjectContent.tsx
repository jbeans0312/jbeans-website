import React from "react";
import PlanStyle from "./style/PlannerProject.module.css";
import { Text } from "@chakra-ui/react";
import planner from "../images/plannerhomepage.png";
import { ExternalLink } from "react-external-link";

export function PlannerProjectContent(): JSX.Element {
    const text1 = new String(
        "My introduction to web development was through CISC275 at UD.\n\n"
    );

    const text2 = new String(
        "Our group worked using an Agile system to complete the project through a series of sprints.\n\n"
    );

    const text3 = new String(
        "Our site is a tool that UD students can use to create a four year plan or to plan individual semesters.\n\n"
    );

    return (
        <div className={PlanStyle.contentwrapper}>
            <h1 className={PlanStyle.h1}>UDCIS Student Planner</h1>
            <div className={PlanStyle.content}>
                <Text className={PlanStyle.basetext}>
                    {text1}
                    {text2}
                    {text3}
                </Text>
                <div className={PlanStyle.imgwrapper}>
                    <img src={planner} className={PlanStyle.contentimg}></img>
                    <ExternalLink href="https://ud-cisc275-s22.github.io/cis-scheduler-team-14/">
                        <span>Click to GitHub deployment (new tab)</span>
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}
