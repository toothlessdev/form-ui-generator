import type { BaseField } from "../base/BaseField";
export interface CheckboxField extends BaseField<"Checkbox"> {
    component: "Checkbox";
    options: {
        label: string;
        value: string;
    }[];
    inline: boolean;
}
