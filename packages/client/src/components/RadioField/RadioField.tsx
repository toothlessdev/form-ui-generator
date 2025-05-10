import type { RadioField } from "@form-ui-generator/types";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

export const RadioFieldComponent = (field: RadioField) => {
    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <RadioGroup
                id={field.id}
                className={cn("flex", field.inline ? "flex-row" : "flex-col")}
                defaultValue={field.defaultValue}
                disabled={field.disabled}
            >
                {field.options.map(({ label, value }) => {
                    return (
                        <div
                            key={value}
                            className="flex items-center space-x-2"
                        >
                            <RadioGroupItem value={value} id={value} />
                            <Label htmlFor={value}>{label}</Label>
                        </div>
                    );
                })}
            </RadioGroup>
        </Fragment>
    );
};
