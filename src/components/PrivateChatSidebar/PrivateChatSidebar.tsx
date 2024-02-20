import { type ReactElement } from "react";
import { ChatListItem } from "@/components/PrivateChatSidebar/ChatListItem";
import styles from "./PrivateChatSidebar.module.css";

export function PrivateChatSidebar(): ReactElement {
    return (
        <div className={styles.sidebar}>
            <ChatListItem
                avatarUrl={
                    "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"
                }
                username={"LOuis!"}
                messagePreview={"Very message preview !!!!!!!!!"}
            />{" "}
        </div>
    );
}
