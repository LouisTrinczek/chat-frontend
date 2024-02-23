"use client";
import React, { type ReactElement } from "react";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

interface ServerListItemProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    serverName: string;
    iconUrl: string;
}
export function ServerListItem(props: ServerListItemProps): ReactElement {
    return (
        <IconAvatar
            src={props.iconUrl}
            alt={"Server Image of " + props.serverName}
            onClick={props.onClick}
        />
    );
}
