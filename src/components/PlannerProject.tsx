import React, { useState } from "react";
import PlanStyle from "./style/PlannerProject.module.css";
import { PlannerProjectThumb } from "./PlannerProjectThumb";
import { PlannerProjectContent } from "./PlannerProjectContent";
export function PlannerProject(): JSX.Element {
    const [isHover, updateHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        updateHover(true);
    };

    const handleMouseExit = () => {
        updateHover(false);
    };

    return (
        <div
            className={PlanStyle.project}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
        >
            {isHover ? (
                <PlannerProjectContent></PlannerProjectContent>
            ) : (
                <PlannerProjectThumb></PlannerProjectThumb>
            )}
        </div>
    );
}
