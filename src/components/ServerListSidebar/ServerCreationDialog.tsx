import { Dialog } from "primereact/dialog";
import { FormInput } from "@/components/Form/FormInput";
import React, { FormEvent } from "react";
import { Button } from "primereact/button";
import { ServerCreationDto } from "@/services/generated";

interface ServerCreationDialog {
    visible: boolean;
    setVisible: (state: boolean) => void;
    submit: (serverCreationDto: ServerCreationDto) => void;
}

export function ServerCreationDialog(props: ServerCreationDialog) {
    const [serverName, setServername] = React.useState("");

    const serverCreationDto: ServerCreationDto = { name: serverName };

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.submit(serverCreationDto);
    };

    return (
        <Dialog
            header={"Create Server"}
            onHide={() => props.setVisible(false)}
            visible={props.visible}
        >
            <form onSubmit={submitHandler}>
                <FormInput
                    placeholder={"Server Name"}
                    icon={"PENCIL"}
                    value={serverName}
                    onChange={(e) => setServername(e)}
                    name={"serverName"}
                    id={"serverName"}
                />

                <Button>Create</Button>
            </form>
        </Dialog>
    );
}
