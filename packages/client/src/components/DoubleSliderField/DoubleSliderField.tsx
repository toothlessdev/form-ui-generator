import { Fragment, useCallback, useState } from "react";
import { DualRangeSlider } from "../ui/dual-slider";
import { Label } from "../ui/label";
import type { DoubleSliderField } from "@form-ui-generator/types";

export const DoubleSliderFieldComponent = (field: DoubleSliderField) => {
    const [values, setValues] = useState<number[]>([
        field.defaultValue[0],
        field.defaultValue[1],
    ]);

    const mapMarkers = useCallback(() => {
        if (field.markers.length === 0) return () => undefined;
        return (value?: number) => (
            <span className="whitespace-nowrap text-xs">
                {field.markers?.[(value as number) - field.min] ?? value}
            </span>
        );
    }, [field.markers, field.min]);

    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <DualRangeSlider
                id={field.id}
                label={mapMarkers()}
                labelPosition="bottom"
                value={values}
                onValueChange={setValues}
                min={field.min}
                max={field.max}
                step={field.step}
                disabled={field.disabled}
            />
            <div className="flex justify-between text-sm mt-1">
                <span>{field.minLabel}</span>
                <span>{field.maxLabel}</span>
            </div>
        </Fragment>
    );
};
