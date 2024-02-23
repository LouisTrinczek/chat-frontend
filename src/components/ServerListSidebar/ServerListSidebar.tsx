"use client";
import React, { type ReactElement } from "react";
import styles from "./ServerListSidebar.module.css";
import { ServerListItem } from "@/components/ServerListSidebar/ServerListItem";
import { ServerCreationDto, ServerResponseDto } from "@/services/generated";
import { ServerCreationDialog } from "@/components/ServerListSidebar/ServerCreationDialog";
import { Button } from "primereact/button";
import { api } from "@/services/api";
import { toast } from "react-toastify";

interface ServerListSidebarProps {
    serverData: ServerResponseDto[];
}

export function ServerListSidebar(props: ServerListSidebarProps): ReactElement {
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [serverData, setServerData] = React.useState<ServerResponseDto[]>(
        props.serverData
    );

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

    React.useEffect(() => {
        setServerData(props.serverData);
    }, [props.serverData]);

    return (
        <>
            <div className={styles.sidebar}>
                {serverData.map((server) => (
                    <ServerListItem
                        key={server.id}
                        serverName={server.name}
                        iconUrl={server.iconUrl ?? ""}
                        onClick={() => {
                            console.log("Hello");
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
