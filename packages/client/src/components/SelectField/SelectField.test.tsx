import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SelectFieldComponent } from "./SelectField";
import type { SelectField } from "@form-ui-generator/types";

describe("<SelectField />", () => {
    const defaultFields: SelectField = {
        id: "id-select",
        component: "Select",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        placeholder: "Select Placeholder",
        label: "Select Field Label",
        defaultValue: "",
        visibleIf: {
            fieldId: "",
            equals: undefined,
        },
        required: false,
        disabled: false,
    };

    test("label 이 렌더링 되어야 한다.", () => {
        render(<SelectFieldComponent {...defaultFields} />);
        const $label = screen.getByText("Select Field Label");
        expect($label).toBeInTheDocument();
    });

    test("defaultValue 가 설정되어있지 않고, placeholder 값이 설정되어있는 경우 placeholder 를 기본선택지에 출력한다.", () => {
        render(<SelectFieldComponent {...defaultFields} />);
        const $select = screen.getByRole("combobox");
        expect($select).toHaveTextContent("Select Placeholder");
    });

    test("disabled 가 true 이면 SelectField 가 비활성화 되어야 한다.", () => {
        render(<SelectFieldComponent {...defaultFields} disabled={true} />);

        const $select = screen.getByRole("combobox");
        expect($select).toBeDisabled();
    });

    test("defaultValue 가 설정되어있으면 SelectField 가 해당 값으로 설정되어야 한다.", async () => {
        render(
            <SelectFieldComponent {...defaultFields} defaultValue="option1" />
        );
        const defaultOption = await screen.findByText("Option 1");
        expect(defaultOption).toBeInTheDocument();
    });
});
