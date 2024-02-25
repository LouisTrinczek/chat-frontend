import { ReactElement } from "react";
import { ChatPanel } from "@/components/ChatPanel/ChatPanel";
import { PrivateChatSidebar } from "@/components/PrivateChatSidebar/PrivateChatSidebar";

interface PrivateChatProps {
    params: { userId: string };
}

export default function PrivateChat(props: PrivateChatProps): ReactElement {
    console.log(props.params.userId);
    return (
        <>
            <PrivateChatSidebar />
            <ChatPanel chatMessages={[]} />
        </>
    );
}
