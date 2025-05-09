import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SingleSliderFieldComponent } from "./SingleSliderField";
import type { SingleSliderField } from "@form-ui-generator/types";

describe("<SingleSliderField />", () => {
    const defaultFields: SingleSliderField = {
        component: "SingleSlider",
        min: 0,
        max: 0,
        step: 0,
        unit: "",
        minLabel: "",
        maxLabel: "",
        marks: [],
        showValueLabel: false,
        id: "",
        label: "",
        required: false,
        defaultValue: 0,
        visibleIf: {
            fieldId: "",
            equals: undefined,
        },
        disabled: false,
    };

    test("label 이 렌더링 되어야 한다", () => {
        render(
            <SingleSliderFieldComponent
                {...defaultFields}
                label="Single Slider Label"
            />
        );
        const $label = screen.getByText("Single Slider Label");
        expect($label).toBeInTheDocument();
    });

    test("minLabel, maxLabel 이 설정된 경우 렌더링 되어야 한다", () => {
        render(
            <SingleSliderFieldComponent
                {...defaultFields}
                minLabel="Min"
                maxLabel="Max"
            />
        );
        const $minLabel = screen.getByText("Min");
        const $maxLabel = screen.getByText("Max");
        expect($minLabel).toBeInTheDocument();
        expect($maxLabel).toBeInTheDocument();
    });
});
