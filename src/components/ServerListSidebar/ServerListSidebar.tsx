"use client";
import { type ReactElement } from "react";
import styles from "./ServerListSidebar.module.css";
import { ServerListItem } from "@/components/ServerListSidebar/ServerListItem";

export function ServerListSidebar(): ReactElement {
    return (
        <div className={styles.sidebar}>
            <ServerListItem
                onClick={() => {
                    console.log("Hello");
                }}
            />
        </div>
    );
}
