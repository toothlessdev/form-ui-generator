import type { BaseField } from "../base/BaseField";

export interface SelectField extends BaseField {
    component: "Select";

    options: { label: string; value: string }[];
    placeholder: string;
}
