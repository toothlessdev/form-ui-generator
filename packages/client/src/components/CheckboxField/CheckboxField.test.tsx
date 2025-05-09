import type { CheckboxField } from "@form-ui-generator/types";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CheckboxFieldComponent } from "./CheckboxField";

describe("<CheckboxField />", () => {
    const defaultFields: CheckboxField = {
        id: "id-checkbox",
        component: "Checkbox",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        label: "Checkbox Field Label",
        defaultValue: [],
        visibleIf: {
            fieldId: "",
            equals: undefined,
        },
        inline: false,
        required: false,
        disabled: false,
    };

    test("label 이 렌더링 되어야 한다.", () => {
        render(
            <CheckboxFieldComponent
                {...defaultFields}
                label="Checkbox Field Label"
            />
        );
        const $label = screen.getByText("Checkbox Field Label");
        expect($label).toBeInTheDocument();
    });

    test("defaultValue 가 설정된경우 해당 값을 value 로 가지는 checkbox 가 체크되어야 한다.", () => {
        render(
            <CheckboxFieldComponent
                {...defaultFields}
                defaultValue={["option1", "option2"]}
            />
        );
        const $checkbox1 = screen.getByRole("checkbox", { name: "Option 1" });
        const $checkbox2 = screen.getByRole("checkbox", { name: "Option 2" });
        const $checkbox3 = screen.getByRole("checkbox", { name: "Option 3" });

        expect($checkbox1).toBeChecked();
        expect($checkbox2).toBeChecked();
        expect($checkbox3).not.toBeChecked();
    });

    test("inline 이 true 인 경우 checkbox 가 가로로 나열되어야 한다.", () => {
        const { container } = render(
            <CheckboxFieldComponent {...defaultFields} inline={true} />
        );
        const $checkboxGroup = container.querySelector(".checkbox-group");
        expect($checkboxGroup).toHaveClass("flex-row");
    });

    test("inline 이 false 인 경우 checkbox 가 세로로 나열되어야 한다.", () => {
        const { container } = render(
            <CheckboxFieldComponent {...defaultFields} inline={false} />
        );
        const $checkboxGroup = container.querySelector(".checkbox-group");
        expect($checkboxGroup).toHaveClass("flex-col");
    });
});
