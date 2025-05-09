import type { BaseField } from "../base/BaseField";

export interface RadioField extends BaseField<"Radio"> {
    component: "Radio";

    options: { label: string; value: string }[];
    inline: boolean;
}
