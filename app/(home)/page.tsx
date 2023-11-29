import WelcomeBackUserBlock, { NewModelsBlock } from "@/components/blocks/Intro";
import Sidebar, { FigmaSidebar, SidebarComp } from "@/components/dashboard/Sidebar";
import MobileSideNav from "@/components/dashboard/SidebarMobile";
import ToggleSidebar from "@/components/dashboard/ToggleSidebar";
import React from "react";

export default function Home() {
    return (
        <div className="flex">
            {/* <SidebarComp /> */}
            <FigmaSidebar />
            <div className="flex-grow py-3">
                <WelcomeBackUserBlock />
                <NewModelsBlock />
            </div>
        </div>
    )
}