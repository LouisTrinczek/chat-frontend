import { type ReactElement } from "react";
import styles from "./ChatMessage.module.css";
import { IconAvatar } from "@/components/IconAvatar/IconAvatar";

export function ChatMessage(): ReactElement {
    return (
        <div className={styles.message}>
            <div>
                <IconAvatar
                    src={
                        "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7"
                    }
                    alt={"profile iamge"}
                />
            </div>
            <div>
                <h4>Louis Trinczek</h4>
                <p>Message bla bla bla oke ja ok ja bla bla</p>
            </div>
        </div>
    );
}
