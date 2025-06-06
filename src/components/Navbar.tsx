'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/" key="home-link">
                    <MenuItem active={active} setActive={setActive} item="Home">

                    </MenuItem>
                </Link>
                <MenuItem active={active} setActive={setActive} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses" key="all-courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses/basic-music-theory" key="basic-music-theory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses/advanced-composition" key="advanced-composition">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses/song-writing" key="song-writing">Song Writing</HoveredLink>
                        <HoveredLink href="/courses/music-production" key="music-production">Music Production</HoveredLink>
                    </div>
                </MenuItem>

                <Link href="/contact" key="contact-link">
                    <MenuItem active={active} setActive={setActive} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar