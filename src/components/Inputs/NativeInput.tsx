import React from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "components/Wrappers";
import { Input, Wrapper } from "./styles";
import { InputPropsType } from "./types";
import ErrorComponent from "./ErrorComponent";

function FormInput(
  { name, label, width, error, rounded, ...InputProps }: InputPropsType,
  ref: any,
) {
  const { t } = useTranslation();

  return (
    <Flex width={width} ref={ref} direction="column" gap="8px">
      <Wrapper rounded={rounded} error={!!error}>
        <Input
          error={!!error}
          placeholder={label && t(label)}
          {...InputProps}
        />
      </Wrapper>
      {error && <ErrorComponent error={error} />}
    </Flex>
  );
}

export default React.memo(React.forwardRef(FormInput));
