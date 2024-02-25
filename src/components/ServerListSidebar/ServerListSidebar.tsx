"use client";
import React, { type ReactElement } from "react";
import styles from "./ServerListSidebar.module.css";
import { ServerListItem } from "@/components/ServerListSidebar/ServerListItem";
import { ServerCreationDto, ServerResponseDto } from "@/services/generated";
import { ServerCreationDialog } from "@/components/ServerListSidebar/ServerCreationDialog";
import { Button } from "primereact/button";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth/AuthService";

export function ServerListSidebar(): ReactElement {
    const router = useRouter();
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [serverData, setServerData] = React.useState<ServerResponseDto[]>([]);

    const createServer = async (serverCreationDto: ServerCreationDto) => {
        try {
            const request =
                await api.servers.postApiV1Servers(serverCreationDto);
            setServerData((old) => [...old, request.data]);
            setDialogVisible(false);
            toast.success("Server created successfully");
        } catch (e) {
            toast.error("Error Creating server");
        }
    };

    async function fetchUserServers() {
        try {
            const serverList = await api.users.getApiV1UsersServers(
                AuthService.getUserId()
            );
            setServerData(serverList.data ?? []);
        } catch (e) {
            toast.error("Unexpected Error fetching Servers. Try again...");
        }
    }

    React.useEffect(() => {
        fetchUserServers();
    }, []);

    return (
        <>
            <div className={styles.sidebar}>
                {serverData.map((server) => (
                    <ServerListItem
                        key={server.id}
                        serverName={server.name}
                        iconUrl={server.iconUrl ?? ""}
                        onClick={() => {
                            router.push(`/chat/server/${server.id}`);
                        }}
                    />
                ))}
                <Button
                    className={styles.createButton}
                    onClick={() => setDialogVisible(true)}
                >
                    Create Server
                </Button>
            </div>
            <ServerCreationDialog
                visible={dialogVisible}
                setVisible={(state) => setDialogVisible(state)}
                submit={createServer}
            />
        </>
    );
}
