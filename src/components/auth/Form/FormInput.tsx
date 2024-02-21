import { InputText } from "primereact/inputtext";
import { PrimeIcons, PrimeIconsOptions } from "primereact/api";
import { HTMLInputTypeAttribute } from "react";
interface FormInputProps {
    placeholder: string;
    icon: keyof PrimeIconsOptions;
    value: string;
    onChange: (input: string) => void;
    inputType?: HTMLInputTypeAttribute;
    className?: string;
}
export function FormInput(props: FormInputProps) {
    return (
        <div className={"p-inputgroup flex-1 " + (props.className ?? "")}>
            <span className="p-inputgroup-addon">
                <i className={PrimeIcons[props.icon]}></i>
            </span>
            <InputText
                onChange={(e) => props.onChange(e.currentTarget.value)}
                value={props.value}
                placeholder={props.placeholder}
                type={props.inputType ?? "text"}
            />
        </div>
    );
}
