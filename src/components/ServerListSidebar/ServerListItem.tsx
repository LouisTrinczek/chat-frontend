"use client";
import { type ReactElement } from "react";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

interface ServerListItemProps {
    onClick?: () => any;
}
export function ServerListItem(props: ServerListItemProps): ReactElement {
    return (
        <IconAvatar
            src={"https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"}
            alt={"profile iamge"}
            onClick={props.onClick}
        />
    );
}
