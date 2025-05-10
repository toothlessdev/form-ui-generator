import type { RadioField } from "@form-ui-generator/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RadioFieldComponent } from "./RadioField";

describe("<RadioFieldComponent/>", () => {
    const defaultFields: RadioField = {
        component: "Radio",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        inline: false,
        id: "",
        label: "",
        required: false,
        defaultValue: "",
        visibleIf: {
            fieldId: "",
            equals: undefined,
        },
        disabled: false,
    };

    test("label 이 렌더링 되어야 한다", () => {
        render(
            <RadioFieldComponent {...defaultFields} label="Radio Field Label" />
        );
        const $label = screen.getByText("Radio Field Label");
        expect($label).toBeInTheDocument();
    });

    test("각 options 들이 렌더링되어야 한다", () => {
        render(<RadioFieldComponent {...defaultFields} />);
        const $option1 = screen.getByRole("radio", { name: "Option 1" });
        const $option2 = screen.getByRole("radio", { name: "Option 2" });
        const $option3 = screen.getByRole("radio", { name: "Option 3" });

        expect($option1).toBeInTheDocument();
        expect($option2).toBeInTheDocument();
        expect($option3).toBeInTheDocument();
    });

    test("option 을 클릭한 경우 해당 RadioItem 이 체크되어야 한다", () => {
        render(<RadioFieldComponent {...defaultFields} />);
        const $option1 = screen.getByRole("radio", { name: "Option 1" });
        const $option2 = screen.getByRole("radio", { name: "Option 2" });
        const $option3 = screen.getByRole("radio", { name: "Option 3" });

        fireEvent.click($option1);
        expect($option1).toBeChecked();
        expect($option2).not.toBeChecked();
        expect($option3).not.toBeChecked();
    });

    test("defaultValue 가 설정된 경우 해당 값이 체크되어야 한다", () => {
        render(
            <RadioFieldComponent {...defaultFields} defaultValue="option1" />
        );
        const $radio = screen.getByRole("radio", { name: "Option 1" });
        expect($radio).toBeChecked();
    });

    test("defaultValue 가 설정되지 않은 경우 아무 RadioItem 도 체크되어있지 않아야 한다", () => {
        render(<RadioFieldComponent {...defaultFields} />);

        const $option1 = screen.getByRole("radio", { name: "Option 1" });
        const $option2 = screen.getByRole("radio", { name: "Option 2" });
        const $option3 = screen.getByRole("radio", { name: "Option 3" });

        expect($option1).not.toBeChecked();
        expect($option2).not.toBeChecked();
        expect($option3).not.toBeChecked();
    });

    test("disabled 가 true 인 경우 RadioItem 이 비활성화 되어야 한다", () => {
        render(<RadioFieldComponent {...defaultFields} disabled={true} />);
        const $option1 = screen.getByRole("radio", { name: "Option 1" });
        const $option2 = screen.getByRole("radio", { name: "Option 2" });
        const $option3 = screen.getByRole("radio", { name: "Option 3" });

        expect($option1).toBeDisabled();
        expect($option2).toBeDisabled();
        expect($option3).toBeDisabled();
    });

    test("inline 이 true 인 경우 RadioItem 이 가로로 나열되어야 한다", () => {
        render(<RadioFieldComponent {...defaultFields} inline={true} />);
        const $radioGroup = screen.getByRole("radiogroup");
        expect($radioGroup).toHaveClass("flex-row");
    });
});
