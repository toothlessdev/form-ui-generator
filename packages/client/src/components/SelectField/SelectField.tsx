import type { SelectField } from "@form-ui-generator/types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Fragment } from "react/jsx-runtime";

export const SelectFieldComponent = (field: SelectField) => {
    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Select defaultValue={field.defaultValue} disabled={field.disabled}>
                <SelectTrigger className="w-full" id={field.id}>
                    <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {field.options.map((option) => {
                        return (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </Fragment>
    );
};
