import React from "react";
import { IntroductionCard } from "../components/IntroductionCard";
import { PlannerProject } from "../components/PlannerProject";
export function Home(): JSX.Element {
    return (
        <div>
            <IntroductionCard></IntroductionCard>
            <PlannerProject></PlannerProject>
        </div>
    );
}
