export type ComponentType = "Input" | "Checkbox" | "Radio" | "Select" | "SingleSlider" | "DoubleSlider" | "TextArea";
export interface BaseField {
    id: string;
    label: string;
    component: ComponentType;
    required: boolean;
    defaultValue: any;
    visibleIf: {
        fieldId: string;
        equals: any;
    };
    disabled: boolean;
}
