import { ServerListSidebar } from "@/components/ServerListSidebar/ServerListSidebar";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
    return (
        <div className={"flex"}>
            <ServerListSidebar />
            {children}
        </div>
    );
}
