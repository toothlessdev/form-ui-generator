import type { SingleSliderField } from "@form-ui-generator/types";
import { Slider } from "../ui/slider";
import { Fragment } from "react/jsx-runtime";
import { Label } from "../ui/label";

export const SingleSliderFieldComponent = (field: SingleSliderField) => {
    return (
        <Fragment>
            <Label htmlFor={field.id}>{field.label}</Label>
            <div className="w-full">
                <Slider
                    id={field.id}
                    className="w-full"
                    defaultValue={[field.defaultValue]}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    disabled={field.disabled}
                />
                <div className="w-full flex justify-between text-sm">
                    <p>{field.minLabel}</p>
                    <p>{field.maxLabel}</p>
                </div>
            </div>
        </Fragment>
    );
};
