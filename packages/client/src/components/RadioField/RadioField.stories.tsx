import type { Meta, StoryObj } from "@storybook/react";
import { RadioFieldComponent } from "./RadioField";
import type { RadioField } from "@form-ui-generator/types";

const meta: Meta<typeof RadioFieldComponent> = {
    title: "Components/RadioField",
    component: RadioFieldComponent,
};

export default meta;
type Story = StoryObj<typeof RadioFieldComponent>;

const defaultFields: RadioField = {
    component: "Radio",
    options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ],
    inline: false,
    id: "",
    label: "Radio Field Label",
    required: false,
    defaultValue: "option1",
    visibleIf: {
        fieldId: "",
        equals: undefined,
    },
    disabled: false,
};

export const Default: Story = {
    args: {
        ...defaultFields,
    },
};

export const Inline: Story = {
    args: {
        ...defaultFields,
        inline: true,
    },
};

export const Disabled: Story = {
    args: {
        ...defaultFields,
        disabled: true,
    },
};
