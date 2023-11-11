import React, { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import ToggleSidebar from "@/components/dashboard/ToggleSidebar";
import MobileSideNav from "@/components/dashboard/SidebarMobile";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const { data: userSession } = await readUserSession();
    if (!userSession.session) {
        return redirect('/auth');
    };

    return (
        <div className="w-full-flex">
            <div className="h-screen flex flex-col">
                <Sidebar />
                <MobileSideNav />
            </div>
            <div className="w-full sm:flex-1 p-5 sm:p-10 space-y-5 bg-gray-100 dark:bg-inherit">
				<ToggleSidebar />
				{children}
			</div>
        </div>
    );
};