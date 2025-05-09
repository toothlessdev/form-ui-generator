import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputFieldComponent } from "./InputField";
import type { InputField } from "@form-ui-generator/types";

describe("<InputField />", () => {
    const defaultFields: InputField = {
        id: "id-input",
        component: "Input",
        type: "text",
        placeholder: "Input Placeholder",
        label: "Input Field Label",
        defaultValue: "",
        visibleIf: {
            fieldId: "",
            equals: undefined,
        },
        required: false,
        disabled: false,
    };

    test("label 이 렌더링 되어야 한다", () => {
        render(
            <InputFieldComponent {...defaultFields} label="Input Field Label" />
        );
        const $label = screen.getByText("Input Field Label");
        expect($label).toBeInTheDocument();
    });

    test("defaultValue 가 설정되어있지 않고, placeholder 값이 설정되어있는 경우 placeholder 를 기본 선택지에 출력한다", () => {
        render(
            <InputFieldComponent
                {...defaultFields}
                placeholder="Input Placeholder"
            />
        );
        const $input = screen.getByPlaceholderText("Input Placeholder");
        expect($input).toBeInTheDocument();
    });

    test("disabled 가 true 이면 InputField 가 비활성화 되어야 한다", () => {
        render(<InputFieldComponent {...defaultFields} disabled={true} />);
        const $input = screen.getByRole("textbox");
        expect($input).toBeDisabled();
    });

    test("defaultValue 가 설정되어있으면 InputField 가 해당 값으로 설정되어야 한다", () => {
        render(<InputFieldComponent {...defaultFields} defaultValue="test" />);
        const $input = screen.getByDisplayValue("test");
        expect($input).toBeInTheDocument();
    });
});
