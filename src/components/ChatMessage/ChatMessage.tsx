import { type ReactElement } from "react";
import styles from "./ChatMessage.module.css";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

interface ChatMessageProps {
    avatarUrl: string;
    username: string;
    message: string;
}
export function ChatMessage(props: ChatMessageProps): ReactElement {
    return (
        <div className={styles.message}>
            <div>
                <IconAvatar
                    src={props.avatarUrl}
                    alt={"Profile Image from " + props.username}
                />
            </div>
            <div>
                <h4>{props.username}</h4>
                <p>{props.message}</p>
            </div>
        </div>
    );
}
