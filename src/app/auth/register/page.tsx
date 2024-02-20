"use client";
import { InputText } from "primereact/inputtext";
import styles from "./RegisterPage.module.css";
import { FormInput } from "@/components/auth/Form/FormInput";
import React from "react";

export default function RegisterPage() {
    const [email, setEmail] = React.useState("");
    const submitHandler = () => {};

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={submitHandler}>
                <FormInput
                    value={email}
                    onChange={(e) => setEmail(e)}
                    icon={"ENVELOPE"}
                    placeholder={"Email"}
                    inputType={"email"}
                />
                <FormInput
                    value={email}
                    onChange={(e) => setEmail(e)}
                    icon={"USER"}
                    placeholder={"Username"}
                />
                <FormInput
                    value={email}
                    onChange={(e) => setEmail(e)}
                    icon={"KEY"}
                    placeholder={"Password"}
                    inputType={"password"}
                />
            </form>
        </div>
    );
}
