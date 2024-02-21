"use client";
import React, { type ReactElement } from "react";
import Image from "next/image";
import styles from "./IconAvatar.module.css";

interface IconAvatarProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function IconAvatar(props: IconAvatarProps): ReactElement {
    return (
        <Image
            className={styles.avatar + " " + props.className ?? ""}
            src={props.src}
            alt={props.alt}
            width={props.width ?? 64}
            height={props.height ?? 64}
            onClick={props.onClick}
        />
    );
}
