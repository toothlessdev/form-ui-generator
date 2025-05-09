import type { InputField } from "@form-ui-generator/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Fragment } from "react/jsx-runtime";

export const InputFieldComponent = (field: InputField) => {
    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                defaultValue={field.defaultValue}
                disabled={field.disabled}
                required={field.required}
            />
        </Fragment>
    );
};
