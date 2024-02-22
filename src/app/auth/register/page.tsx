"use client";
import styles from "./RegisterPage.module.css";
import { FormInput } from "@/components/auth/Form/FormInput";
import React from "react";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { ApiError, UserRegistrationDto } from "@/services/generated";
import { errorToastOptions, successToastOptions } from "@/config/ReactToastify";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterPage() {
    const router = useRouter();

    const formValidateScheme = Yup.object().shape({
        email: Yup.string()
            .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid")
            .required("Email is Required"),
        username: Yup.string().required("Username is Required"),
        password: Yup.string()
            .required("Password is Required")
            .min(7, "Password is too short. Needs at least 7 characters."),
    });

    const formik = useFormik<UserRegistrationDto>({
        initialValues: { email: "", password: "", username: "" },
        validationSchema: formValidateScheme,
        onSubmit: async (formData) => {
            const promiseToast = toast.loading("Creating User...");
            try {
                await api.users.postApiV1UsersRegister(formData);

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
        },
    });

    const isFormFieldInvalid = (name: keyof UserRegistrationDto) =>
        !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name: keyof UserRegistrationDto) => {
        return isFormFieldInvalid(name) ? formik.errors[name] : undefined;
    };

    return (
        <div className={styles.registerContainer}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <FormInput
                    value={formik.values.email}
                    onChange={(e) => formik.setFieldValue("email", e)}
                    id={"email"}
                    name={"email"}
                    icon={"ENVELOPE"}
                    placeholder={"Email"}
                    inputType={"email"}
                    invalidMessage={getFormErrorMessage("email")}
                    invalid={isFormFieldInvalid("email")}
                />
                <FormInput
                    value={formik.values.username}
                    onChange={(e) => formik.setFieldValue("username", e)}
                    icon={"USER"}
                    id={"username"}
                    name={"username"}
                    placeholder={"Username"}
                    invalidMessage={getFormErrorMessage("username")}
                    invalid={isFormFieldInvalid("username")}
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
                <Button type={"submit"}>Register</Button>
            </form>
        </div>
    );
}
