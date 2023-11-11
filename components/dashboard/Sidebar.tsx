import React from "react";
import NavLinks from "@/constants/SidebarLinks";

import { cn } from "@/lib/utils";
import DarkModeToggle from "../ToggleDarkMode";
import SignOut from "../auth/Signout";

export default function Sidebar() {
    return (
        <SidebarComp className="hidden lg-block dark:bg-gradient-dark flex-1" />
    )
}

export const SidebarComp = ({ className }: { className?: string }) => {
    return (
        <div className={`min-h-screen ${className}`}>
			<div
			className={cn(
				"h-full lg:w-96 lg:p-10 space-y-5 lg:border-r flex flex-col"
			)}
			>
				<div className="flex-1 space-y-5">
					<div className="flex items-center gap-2 flex-1">
						<h1 className="text-3xl font-bold">Embr</h1>
					</div>
					<NavLinks />
					<DarkModeToggle />
				</div>
				<div className="">
					<SignOut />
				</div>
			</div>
		</div>
    );
}