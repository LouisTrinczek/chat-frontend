import { ReactElement } from "react";

interface ServerPageProps {
    params: { serverId: string };
}

export default function ServerPage(props: ServerPageProps): ReactElement {
    console.log(props.params.serverId);
    return <h1>Tobag</h1>;
}
