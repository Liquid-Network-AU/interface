"use client"

import React from "react";
import { PersonIcon, CrumpledPaperIcon, ChatBubbleIcon, DashboardIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLinks() {
	const pathname = usePathname();

	const links = [
		{
			href: "/dashboard/members",
			text: "Profile",
			Icon: PersonIcon,
		},
		{
			href: "/dashboard/models",
			text: "Models",
			Icon: CrumpledPaperIcon,
		},
		{
			href: "/dashboard/models",
			text: "Chat",
			Icon: ChatBubbleIcon,
		},
		{
			href: "/dashboard/models",
			text: "Dashboard",
			Icon: DashboardIcon,
		},
		{
			href: "/dashboard/models",
			text: "Library",
			Icon: BookmarkFilledIcon,
		},
		{
			href: "/dashboard/models",
			text: "",
			Icon: CrumpledPaperIcon,
		},
		{
			href: "/dashboard/models",
			text: "",
			Icon: CrumpledPaperIcon,
		},
	];

	return (
		<div className="space-y-5">
		  {links.map((link, index) => {
			const Icon = link.Icon;
			return (
			  <Link
				onClick={() =>
				  document.getElementById("sidebar-close")?.click()
				}
				href={link.href}
				key={index}
				className={cn(
				  "flex items-center gap-2 rounded-sm p-4", // Increased padding
				  {
					" bg-green-500 dark:bg-green-700 text-white ":
					  pathname === link.href,
				  }
				)}
				style={{ fontSize: '1.25rem' }} // Increased font size
			  >
				<Icon style={{ width: '1.5em', height: '1.5em' }} /> {/* Increased icon size */}
				{link.text}
			  </Link>
			);
		  })}
		</div>
	);
};