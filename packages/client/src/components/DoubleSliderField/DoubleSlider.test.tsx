import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DoubleSliderFieldComponent } from "./DoubleSliderField";
import type { DoubleSliderField } from "@form-ui-generator/types";

describe("<DoubleSliderField />", () => {
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
        markers: [],
    };

    test("label 이 렌더링 되어야 한다", () => {
        render(
            <DoubleSliderFieldComponent
                {...defaultFields}
                label="Double Slider"
            />
        );
        const $label = screen.getByText("Double Slider");
        expect($label).toBeInTheDocument();
    });

    test("defaultValue index 에 해당하는 값이 Thumb 에 렌더링 되어야 한다", () => {
        render(
            <DoubleSliderFieldComponent
                {...defaultFields}
                label="Double Slider"
                defaultValue={[1, 8]}
                markers={[
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
                ]}
            />
        );

        const $leftLabel = screen.getByText("23시");
        const $rightLabel = screen.getByText("6시");

        expect($leftLabel).toBeInTheDocument();
        expect($rightLabel).toBeInTheDocument();
    });
});
