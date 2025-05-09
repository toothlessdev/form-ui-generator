import type { BaseField } from "../base/BaseField";
export interface CheckboxField extends BaseField {
    component: "Checkbox";
    options: {
        label: string;
        value: string;
    }[];
    inline: boolean;
}
