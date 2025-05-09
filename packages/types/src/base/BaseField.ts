export type ComponentType =
    | "Input"
    | "Checkbox"
    | "Radio"
    | "Select"
    | "SingleSlider"
    | "DoubleSlider"
    | "TextArea";

export interface BaseField<T extends ComponentType> {
    id: string;
    label: string;
    component: ComponentType;
    required: boolean;

    defaultValue: T extends "Input" | "TextArea" | "Radio" | "Select"
        ? string
        : T extends "Checkbox"
        ? string[]
        : T extends "SingleSlider"
        ? number
        : T extends "DoubleSlider"
        ? [number, number]
        : never;

    visibleIf: {
        fieldId: string;
        equals: any;
    };
    disabled: boolean;
}
