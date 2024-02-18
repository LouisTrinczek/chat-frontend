import React, { type ReactElement } from "react";
import { ServerListSidebar } from "@/components/ServerListSidebar/ServerListSidebar";
import { PrivateChatSidebar } from "@/components/PrivateChatSidebar/PrivateChatSidebar";
import { ChatPanel } from "@/components/ChatPanel/ChatPanel";

export default function Home(): ReactElement {
    return (
        <div className={"flex"}>
            <ServerListSidebar />
            <PrivateChatSidebar />
            <ChatPanel />
        </div>
    );
}
