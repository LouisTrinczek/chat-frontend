import { type ReactElement } from "react";
import styles from "./ChatPanel.module.css";
import { InputText } from "primereact/inputtext";
import { ChatMessage } from "@/components/ChatMessage/ChatMessage";

export function ChatPanel(): ReactElement {
    return (
        <div className={styles.chatPanel}>
            <div className={styles.messages}>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            <div className={styles.input}>
                <InputText />
            </div>
        </div>
    );
}
