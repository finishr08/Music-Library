"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar( { className }: { className?: string } ) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <>
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
            <HoveredLink href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></HoveredLink>
                <MenuItem setActive={setActive} active={active} item="All Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                        <HoveredLink href="/courses">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Menu>
            </div>
        </>
    )
}
