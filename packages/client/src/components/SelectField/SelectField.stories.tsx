import type { Meta, StoryObj } from "@storybook/react";
import { SelectFieldComponent } from "./SelectField";

const meta: Meta<typeof SelectFieldComponent> = {
    title: "Components/SelectField",
    component: SelectFieldComponent,
};

export default meta;
type Story = StoryObj<typeof SelectFieldComponent>;

export const Default: Story = {
    args: {
        id: "select-field",
        component: "Select",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        placeholder: "Select Option",
        label: "Select Field Label",
        defaultValue: "option1",
        visibleIf: {
            fieldId: "1",
            equals: undefined,
        },
        required: true,
        disabled: false,
    },
};
