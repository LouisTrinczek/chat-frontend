import { ReactElement } from "react";

interface PrivateChatProps {
    params: { channelId: string; serverId: string };
}
export default function ChannelPage(props: PrivateChatProps): ReactElement {
    console.log(props.params.channelId, props.params.serverId);
    return <div>Tobag</div>;
}
