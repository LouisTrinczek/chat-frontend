import { ReactNode } from "react";

export default function ServerLayout({ children }: { children: ReactNode }) {
    return (
        <div className={"flex"}>
            <div>channel list</div>
            {children}
        </div>
    );
}
