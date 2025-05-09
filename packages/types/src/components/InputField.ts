import type { BaseField } from "../base/BaseField";

export interface InputField extends BaseField<"Input"> {
    component: "Input";

    type: HTMLInputElement["type"];
    placeholder: string;
}
