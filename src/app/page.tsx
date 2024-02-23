"use client";
import React, { type ReactElement } from "react";
import { ServerListSidebar } from "@/components/ServerListSidebar/ServerListSidebar";
import { PrivateChatSidebar } from "@/components/PrivateChatSidebar/PrivateChatSidebar";
import { ChatPanel } from "@/components/ChatPanel/ChatPanel";
import { api } from "@/services/api";
import { AuthService } from "@/services/auth/AuthService";
import { useRouter } from "next/navigation";
import { ServerResponseDto } from "@/services/generated";
import { toast } from "react-toastify";

export default function Home(): ReactElement {
    const router = useRouter();
    const [serverData, setServerData] = React.useState<ServerResponseDto[]>([]);

    if (!AuthService.isLoggedIn()) {
        router.replace("/auth/login");
    }

    async function fetchUserServers() {
        try {
            const serverList = await api.users.getApiV1UsersServers(
                AuthService.getUserId()
            );
            setServerData(serverList.data);
        } catch (e) {
            toast.error("Unexpected Error fetching Servers. Try again...");
        }
    }

    React.useEffect(() => {
        fetchUserServers();
    }, []);

    return (
        <div className={"flex"}>
            <ServerListSidebar serverData={serverData} />
            <PrivateChatSidebar />
            <ChatPanel chatMessages={[]} />
        </div>
    );
}
