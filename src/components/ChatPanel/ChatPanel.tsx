import { type ReactElement } from "react";
import styles from "./ChatPanel.module.css";
import { InputText } from "primereact/inputtext";
import { ChatMessage } from "@/components/ChatMessage/ChatMessage";
import { MessageResponseDto } from "@/services";

interface ChatPanelProps {
    chatMessages: MessageResponseDto[];
}
export function ChatPanel(props: ChatPanelProps): ReactElement {
    return (
        <div className={styles.chatPanel}>
            <div className={styles.messages}>
                {props.chatMessages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        username={message.authorId}
                        message={message.content}
                        avatarUrl={
                            "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"
                        }
                    />
                ))}
            </div>
            <div className={styles.input}>
                <InputText />
            </div>
        </div>
    );
}
