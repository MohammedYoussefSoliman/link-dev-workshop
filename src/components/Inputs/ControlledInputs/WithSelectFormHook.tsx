/* eslint-disable react/function-component-definition */
import React from "react";
import _ from "lodash";
import { Controller } from "react-hook-form";
import { SingleValue } from "react-select";
import { InputControllerProps, SelectProps } from "../types";

export default function WithHookFormController<
  T extends SelectProps & InputControllerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return ({ control, ...props }: T) => {
    return (
      <Controller
        control={control}
        name={props.name}
        rules={{ ...props.validationRules }}
        render={({ field, fieldState: { error } }) => (
          <WrappedComponent
            {...(props as T)}
            {...field}
            error={error?.message}
            value={props.options.find((option) => option.value === field.value)}
            onChange={(val) => {
              if (val) {
                if (_.isArray(val)) {
                  field.onChange(val.map((c) => c.value));
                } else {
                  const value = val as SingleValue<any>;
                  field.onChange(value.value);
                }
              }
            }}
          />
        )}
      />
    );
  };
}
