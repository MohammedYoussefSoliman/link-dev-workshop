import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { Flex } from "components/Wrappers";
import DropdownIndicator from "./DropdownIndicator";
import ErrorComponent from "../ErrorComponent";
import Placeholder from "./Placeholder";
import Option from "./Option";
import SingleValue from "./SingleValue";
import useSelectStyles from "./selectStyles";
import { SelectProps } from "../types";

export default function SelectInput({
  name,
  label,
  options,
  error,
  rounded,
  withBorder = true,
  onChange,
  value,
  background = "transparent",
}: SelectProps) {
  const styles = useSelectStyles({
    error: Boolean(error),
    rounded,
    withBorder,
    background,
  });

  const { t } = useTranslation();
  let selectLabel;

  if (typeof label === "string") {
    selectLabel = t(label);
  } else {
    selectLabel = label;
  }

  return (
    <Flex direction="column">
      <Select
        name={name}
        placeholder={selectLabel || name}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          Placeholder,
          Option,
          SingleValue,
        }}
        options={options}
        onChange={onChange}
        value={value}
      />
      {error && <ErrorComponent error={error} />}
    </Flex>
  );
}
