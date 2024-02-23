"use client";
import styles from "./LoginPage.module.css";
import { FormInput } from "@/components/Form/FormInput";
import React from "react";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import { ApiError, UserLoginDto } from "@/services/generated";
import { errorToastOptions, successToastOptions } from "@/config/ReactToastify";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "@/services/api";

interface LoginForm {
    emailOrUsername: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();

    const formValidateScheme = Yup.object().shape(
        {
            emailOrUsername: Yup.string().required(
                "Email or Username required"
            ),
            password: Yup.string().required("Password is Required"),
        },
        [["email", "username"]]
    );

    const formik = useFormik<LoginForm>({
        initialValues: { emailOrUsername: "", password: "" },
        validationSchema: formValidateScheme,
        onSubmit: async (formData) => {
            const userLoginDto: UserLoginDto = { password: "" };
            const isEmail = !!formData.emailOrUsername.match(
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
            );
            const promiseToast = toast.loading("Logging in ...");

            if (isEmail) {
                userLoginDto.email = formData.emailOrUsername;
            } else {
                userLoginDto.username = formData.emailOrUsername;
            }
            userLoginDto.password = formData.password;

            try {
                const response =
                    await api.users.postApiV1UsersLogin(userLoginDto);

                if (!response.data) {
                    return toast.update(promiseToast, {
                        render: "Invalid token was sent from backend",
                        ...errorToastOptions,
                    });
                }

                localStorage.setItem("token", response.data);

                toast.update(promiseToast, {
                    render: "Successfully logged in",
                    ...successToastOptions,
                });

                router.replace("/");
            } catch (e) {
                const message = e instanceof ApiError ? e.body.messages[0] : "";

                toast.update(promiseToast, {
                    ...errorToastOptions,
                    render: message,
                });
            }
        },
    });

    const isFormFieldInvalid = (name: keyof LoginForm) =>
        !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name: keyof LoginForm) => {
        return isFormFieldInvalid(name) ? formik.errors[name] : undefined;
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <FormInput
                    value={formik.values.emailOrUsername!}
                    onChange={(e) => formik.setFieldValue("emailOrUsername", e)}
                    id={"emailUsername"}
                    name={"emailUsername"}
                    icon={"USER"}
                    placeholder={"Email or Username"}
                    inputType={"text"}
                    invalidMessage={getFormErrorMessage("emailOrUsername")}
                    invalid={isFormFieldInvalid("emailOrUsername")}
                />
                <FormInput
                    value={formik.values.password}
                    onChange={(e) => formik.setFieldValue("password", e)}
                    icon={"KEY"}
                    id={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    inputType={"password"}
                    invalidMessage={getFormErrorMessage("password")}
                    invalid={isFormFieldInvalid("password")}
                />
                <Button type={"submit"}>Login</Button>
            </form>
        </div>
    );
}
