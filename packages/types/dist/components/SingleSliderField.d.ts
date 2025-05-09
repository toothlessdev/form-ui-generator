import type { BaseField } from "../base/BaseField";
export interface SingleSliderField extends BaseField {
    component: "SingleSlider";
    min: number;
    max: number;
    step: number;
    unit: string;
    minLabel: string;
    maxLabel: string;
    marks: string[];
    showValueLabel: boolean;
}
