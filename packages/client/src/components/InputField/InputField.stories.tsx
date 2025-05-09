import type { Meta, StoryObj } from "@storybook/react";
import { InputFieldComponent } from "./InputField";

const meta: Meta<typeof InputFieldComponent> = {
    title: "Components/InputField",
    component: InputFieldComponent,

    argTypes: {
        type: {
            control: { type: "radio" },
            options: ["text", "password", "email", "number"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof InputFieldComponent>;

export const Default: Story = {
    args: {
        component: "Input",
        label: "Input Field Label",
        type: "text",
        placeholder: "Enter something...",
    },
};
