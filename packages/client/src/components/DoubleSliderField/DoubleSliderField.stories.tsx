import type { Meta, StoryObj } from "@storybook/react";
import { DoubleSliderFieldComponent } from "./DoubleSliderField";
import type { DoubleSliderField } from "@form-ui-generator/types";

const meta: Meta<typeof DoubleSliderFieldComponent> = {
    title: "Components/DoubleSliderField",
    component: DoubleSliderFieldComponent,
};

export default meta;
type Story = StoryObj<typeof DoubleSliderFieldComponent>;

const defaultFields: DoubleSliderField = {
    component: "DoubleSlider",
    min: 0,
    max: 10,
    step: 1,
    minLabel: "",
    maxLabel: "",
    id: "",
    label: "Double Slider Label",
    required: false,
    defaultValue: [0, 10],
    visibleIf: {
        fieldId: "",
        equals: undefined,
    },
    disabled: false,
    markers: [
        "22시",
        "23시",
        "24시",
        "1시",
        "2시",
        "3시",
        "4시",
        "5시",
        "6시",
        "7시",
        "8시",
    ],
};

export const Default: Story = {
    args: {
        ...defaultFields,
    },
};

export const MinMaxLabels: Story = {
    args: {
        ...defaultFields,
        markers: [],
        minLabel: "Min",
        maxLabel: "Max",
    },
};

export const Disabled: Story = {
    args: {
        ...defaultFields,
        disabled: true,
    },
};
