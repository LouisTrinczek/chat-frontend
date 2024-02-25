"use client";
import React, { type ReactElement } from "react";
import { ServerListSidebar } from "@/components/ServerListSidebar/ServerListSidebar";
import { PrivateChatSidebar } from "@/components/PrivateChatSidebar/PrivateChatSidebar";
import { AuthService } from "@/services/auth/AuthService";
import { useRouter } from "next/navigation";

export default function Home(): ReactElement {
    const router = useRouter();

    React.useEffect(() => {
        if (!AuthService.isLoggedIn()) {
            return router.replace("/auth/login");
        }
    }, [AuthService.isLoggedIn()]);

    return (
        <div className={"flex"}>
            <ServerListSidebar />
            <PrivateChatSidebar />
            <div>
                Welcome, please select a chat or server on the left to start
                chatting
            </div>
        </div>
    );
}
