import { InputText } from "primereact/inputtext";
import { PrimeIcons, PrimeIconsOptions } from "primereact/api";
import React, { HTMLInputTypeAttribute } from "react";
import styles from "./FormInput.module.css";

interface FormInputProps {
    placeholder: string;
    icon: keyof PrimeIconsOptions;
    value: string;
    onChange: (input: string) => void;
    name: string;
    id: string;
    required?: boolean;
    inputType?: HTMLInputTypeAttribute;
    className?: string;
    invalid?: boolean;
    invalidMessage?: string;
}
export function FormInput(props: FormInputProps) {
    const [touched, setTouched] = React.useState(false);
    return (
        <div className={styles.validationInput}>
            <div className={"p-inputgroup flex-1 " + (props.className ?? "")}>
                <span className="p-inputgroup-addon">
                    <i className={PrimeIcons[props.icon]}></i>
                </span>
                <InputText
                    required={props.required ?? false}
                    onChange={(e) => props.onChange(e.currentTarget.value)}
                    value={props.value}
                    placeholder={props.placeholder}
                    formNoValidate
                    id={props.id}
                    name={props.name}
                    type={props.inputType ?? "text"}
                    className={`${touched && props.invalid ? "p-invalid" : ""}`}
                    onBlur={() => setTouched(true)}
                />
            </div>
            {touched && props.invalid && props.invalidMessage && (
                <small className={"p-error"}>{props.invalidMessage}</small>
            )}
        </div>
    );
}
