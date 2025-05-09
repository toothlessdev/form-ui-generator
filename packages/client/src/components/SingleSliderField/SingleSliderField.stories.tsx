import type { Meta, StoryObj } from "@storybook/react";
import { SingleSliderFieldComponent } from "./SingleSliderField";
import type { SingleSliderField } from "@form-ui-generator/types";

const defaultField: SingleSliderField = {
    id: "slider",
    label: "Single Slider Label",
    component: "SingleSlider",
    min: 0,
    max: 10,
    step: 1,
    unit: "units",
    defaultValue: 5,
    minLabel: "",
    maxLabel: "",
    marks: [],
    showValueLabel: false,
    visibleIf: {
        fieldId: "",
        equals: undefined,
    },
    required: false,
    disabled: false,
};

const meta: Meta<typeof SingleSliderFieldComponent> = {
    title: "Components/SingleSliderField",
    component: SingleSliderFieldComponent,

    args: {
        ...defaultField,
    },
};

export default meta;
type Story = StoryObj<typeof SingleSliderFieldComponent>;

export const Default: Story = {};

export const Labeled: Story = {
    args: {
        minLabel: "Min",
        maxLabel: "Max",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
