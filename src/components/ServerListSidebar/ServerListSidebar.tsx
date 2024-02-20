"use client";
import { type ReactElement } from "react";
import styles from "./ServerListSidebar.module.css";
import { ServerListItem } from "@/components/ServerListSidebar/ServerListItem";

export function ServerListSidebar(): ReactElement {
    return (
        <div className={styles.sidebar}>
            <ServerListItem
                serverName={"Test Server"}
                avatarUrl={
                    "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"
                }
                onClick={() => {
                    console.log("Hello");
                }}
            />
        </div>
    );
}
