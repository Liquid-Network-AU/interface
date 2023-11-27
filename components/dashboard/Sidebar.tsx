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

function LightModeToggle() {
	return (
		<label className="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" value="" className="sr-only peer" />
			<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
			<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark/light toggle</span>
		</label>
	);
}

export function FigmaSidebar() {
	return (
		<div className="w-[310px] h-[1010px] justify-center items-start inline-flex bg-gray-900">
		<div className="w-[310px] h-[1010px] px-2.5 pt-5 pb-6 flex-col justify-start items-center gap-5 inline-flex">
		  <div className="self-stretch h-[65px] flex-col justify-center items-center gap-[5px] flex">
			<div className="self-stretch grow shrink basis-0 px-[15px] flex-col justify-center items-start gap-2.5 flex">
			  <div className="w-[333px] relative">
				<div className="w-[184px] h-12 px-[15px] left-0 top-0 absolute flex-col justify-start items-center gap-2.5 inline-flex">
				  <div className="self-stretch grow shrink basis-0 py-[15px] justify-start items-center gap-[17px] inline-flex">
					<div className="w-10 h-10 relative" />
				  </div>
				</div>
				<div className="w-9 h-9 left-[297px] top-[6px] absolute flex-col justify-start items-start inline-flex">
				  <div className="w-8 h-8 p-1 rounded-lg justify-center items-center inline-flex">
					<div className="w-6 h-6 relative flex-col justify-start items-start flex" />
				  </div>
				</div>
			  </div>
			</div>
			<div className="w-[246px] flex-col justify-start items-start flex">
			  <div className="w-[246px] h-[0px] border-2 border-slate-800"></div>
			</div>
		  </div>
		  <div className="self-stretch h-[60px] flex-col justify-center items-center gap-2.5 flex">
			<div className="self-stretch h-[60px] px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
			  <div className="w-[30px] h-[30px] relative" />
			  <div className="w-[168px] text-white text-xl font-medium font-['Inter'] leading-normal">Dashboard</div>
			</div>
		  </div>
		  <div className="self-stretch h-[60px] flex-col justify-center items-center gap-2.5 flex">
			<div className="self-stretch grow shrink basis-0 px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
			  <div className="w-[30px] h-[30px] relative" />
			  <div className="w-[168px] text-white text-xl font-medium font-['Inter'] leading-normal">Chats</div>
			</div>
		  </div>
		  <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2.5 flex">
			<div className="self-stretch h-[60px] px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
			  <div className="w-[30px] h-[30px] relative" />
			  <div className="w-[168px] text-white text-xl font-medium font-['Inter'] leading-normal">Library</div>
			</div>
		  </div>
		  <div className="self-stretch grow shrink basis-0 pt-[480px] flex-col justify-end items-center gap-5 flex">
			<div className="self-stretch h-[60px] flex-col justify-center items-start gap-2.5 flex">
			  <div className="self-stretch h-[60px] px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
				<div className="w-[30px] h-[30px] relative" />
				<div className="w-[168px] text-neutral-400 text-xl font-medium font-['Inter'] leading-normal">Upgrade</div>
			  </div>
			</div>
			<div className="w-[246px] flex-col justify-start items-start flex">
			  <div className="w-[246px] h-[0px] border-2 border-slate-800"></div>
			</div>
			<div className="self-stretch h-[60px] flex-col justify-center items-center gap-2.5 flex">
			  <div className="self-stretch h-[60px] px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
				<div className="w-[30px] h-[30px] relative" />
				<div className="w-[168px] text-neutral-400 text-xl font-medium font-['Inter'] leading-normal">Profile</div>
			  </div>
			</div>
			<div className="self-stretch h-[60px] flex-col justify-center items-center gap-2.5 flex">
			  <div className="self-stretch h-[60px] px-[15px] py-2 bg-gray-900 rounded-[15px] justify-center items-center gap-[22px] inline-flex">
				<div className="w-[30px] h-[30px] relative" />
				<div className="w-[168px] text-neutral-400 text-xl font-medium font-['Inter'] leading-normal">Settings</div>
			  </div>
			</div>
			<div className="w-[246px] h-[0px] border-2 border-slate-800"></div>
        <div className="self-stretch h-[60px] px-[27px] py-2 rounded-md justify-center items-center gap-[22px] inline-flex">
          <div className="justify-center items-center gap-2 flex">
            <div className="w-6 h-6 relative" />
				<LightModeToggle />
				{/* <div className="w-11 h-6 relative">
				  <div className="w-11 h-6 left-0 top-0 absolute bg-slate-800 rounded-[50px]" />
				  <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-white rounded-full" />
				</div> */}
				<div className="w-6 h-6 relative" />
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};  