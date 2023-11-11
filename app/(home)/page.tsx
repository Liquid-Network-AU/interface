import Sidebar, { SidebarComp } from "@/components/dashboard/Sidebar";
import MobileSideNav from "@/components/dashboard/SidebarMobile";
import ToggleSidebar from "@/components/dashboard/ToggleSidebar";
import React from "react";

export default function Home() {
    return (
        <div className="w-full-flex">
            <SidebarComp />
        </div>
    )
}