import type { BaseField } from "../base/BaseField";

export interface DoubleSliderField extends BaseField<"DoubleSlider"> {
    component: "DoubleSlider";

    min: number;
    max: number;
    step: number;

    minLabel: string;
    maxLabel: string;

    markers: string[];
}
