"use client";
import styles from "./RegisterPage.module.css";
import { FormInput } from "@/components/auth/Form/FormInput";
import React, { FormEvent } from "react";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { ApiError } from "@/services/generated";
import { errorToastOptions, successToastOptions } from "@/config/ReactToastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const promiseToast = toast.loading("Test");
        try {
            await api.users.postApiV1UsersRegister({
                email,
                username,
                password,
            });

            toast.update(promiseToast, {
                render: "Successfully created user",
                ...successToastOptions,
            });

            router.replace("/auth/login");
        } catch (e) {
            const message = e instanceof ApiError ? e.body.messages[0] : "";

            toast.update(promiseToast, {
                ...errorToastOptions,
                render: message,
            });
        }
    };

    return (
        <div className={styles.registerContainer}>
            <form className={styles.form} onSubmit={submitHandler}>
                <FormInput
                    value={email}
                    onChange={(e) => setEmail(e)}
                    icon={"ENVELOPE"}
                    placeholder={"Email"}
                    inputType={"email"}
                />
                <FormInput
                    value={username}
                    onChange={(e) => setUsername(e)}
                    icon={"USER"}
                    placeholder={"Username"}
                />
                <FormInput
                    value={password}
                    onChange={(e) => setPassword(e)}
                    icon={"KEY"}
                    placeholder={"Password"}
                    inputType={"password"}
                />
                <Button type={"submit"}>Register</Button>
            </form>
        </div>
    );
}
