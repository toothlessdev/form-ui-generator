import type { BaseField } from "../base/BaseField";
export interface DoubleSliderField extends BaseField {
    component: "DoubleSlider";
    min: number;
    max: number;
    step: number;
    minLabel: string;
    maxLabel: string;
    minValueLabel: string;
    maxValueLabel: string;
    showLabels: boolean;
}
