import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function NavigationBar(): JSX.Element {
    return (
        <Breadcrumb spacing="8px" separator="|">
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/resume">
                    Resume
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/contact">
                    Contact
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
