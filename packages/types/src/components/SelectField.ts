import type { BaseField } from "../base/BaseField";

export interface SelectField extends BaseField<"Select"> {
    component: "Select";

    options: { label: string; value: string }[];
    placeholder: string;
}
