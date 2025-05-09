import type { BaseField } from "../base/BaseField";

export interface InputField extends BaseField {
    component: "Input";

    type: HTMLInputElement["type"];
    placeholder: string;
}
