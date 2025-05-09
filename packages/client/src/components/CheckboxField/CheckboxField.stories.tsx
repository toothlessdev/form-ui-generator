import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxFieldComponent } from "./CheckboxField";

const meta: Meta<typeof CheckboxFieldComponent> = {
    title: "Components/CheckboxField",
    component: CheckboxFieldComponent,
};

export default meta;
type Story = StoryObj<typeof CheckboxFieldComponent>;

export const Default: Story = {
    args: {
        id: "checkbox-field",
        label: "Checkbox Field Label",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        inline: false,
        disabled: false,
        required: false,
        defaultValue: ["option1"],
    },
};
