import { ReactElement } from "react";

interface PrivateChatProps {
    params: { userId: string };
}
export default function PrivateChat(props: PrivateChatProps): ReactElement {
    console.log(props.params.userId);
    return <div>Tobag</div>;
}
