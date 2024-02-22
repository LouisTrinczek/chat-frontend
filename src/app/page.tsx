"use client";
import React, { type ReactElement } from "react";
import { ServerListSidebar } from "@/components/ServerListSidebar/ServerListSidebar";
import { PrivateChatSidebar } from "@/components/PrivateChatSidebar/PrivateChatSidebar";
import { ChatPanel } from "@/components/ChatPanel/ChatPanel";
import { api } from "@/services/api";
import { AuthService } from "@/services/auth/AuthService";

export default function Home(): ReactElement {
    async function test() {
        const chatList = await api.users.getApiV1UsersServers(
            "731ffe15-cdb9-49db-9a87-45123e49ceba"
        );
        console.log(chatList);
    }
    test();
    console.log(AuthService.getToken());

    return (
        <div className={"flex"}>
            <ServerListSidebar />
            <PrivateChatSidebar />
            <ChatPanel chatMessages={[]} />
        </div>
    );
}
