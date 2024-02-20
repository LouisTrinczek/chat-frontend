import { type ReactElement } from "react";
import styles from "./ChatListItem.module.css";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

interface ChatListItemProps {
    avatarUrl: string;
    username: string;
    messagePreview: string;
}

export function ChatListItem(props: ChatListItemProps): ReactElement {
    return (
        <div className={styles.chatListItem}>
            <div>
                <IconAvatar
                    src={props.avatarUrl}
                    alt={"Profile Image from " + props.username}
                />
            </div>
            <div
                className={styles.chatInformation}
                style={{
                    overflow: "hidden",
                }}
            >
                <h3 className={"m-0"}>{props.username}</h3>
                <span className={styles.chatPreview}>
                    {props.messagePreview}
                </span>
            </div>
        </div>
    );
}
