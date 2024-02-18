import { type ReactElement } from "react";
import styles from "./ChatListItem.module.css";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

export function ChatListItem(): ReactElement {
    return (
        <div className={styles.chatListItem}>
            <div>
                <IconAvatar
                    src={
                        "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"
                    }
                    alt={"profile iamge"}
                />
            </div>
            <div
                className={styles.chatInformation}
                style={{
                    overflow: "hidden",
                }}
            >
                <h3 className={"m-0"}>Louis Trinczek</h3>
                <span className={styles.chatPreview}>
                    Some lorem ipsum dolor sit amet very long maybe Sample
                    text....
                </span>
            </div>
        </div>
    );
}
