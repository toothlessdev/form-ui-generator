import type { CheckboxField } from "@form-ui-generator/types";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";

export const CheckboxFieldComponent = (field: CheckboxField) => {
    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <div
                className={cn(
                    field.inline ? "flex-row" : "flex-col",
                    "checkbox-group flex gap-1 "
                )}
            >
                {field.options.map((option) => {
                    return (
                        <div key={option.value} className="flex gap-1">
                            <Checkbox
                                id={option.value}
                                disabled={field.disabled}
                                required={field.required}
                                defaultChecked={field.defaultValue?.includes(
                                    option.value
                                )}
                            />
                            <Label htmlFor={option.value}>{option.label}</Label>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};
