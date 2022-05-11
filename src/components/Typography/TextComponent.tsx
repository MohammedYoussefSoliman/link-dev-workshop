import React from "react";
import { useTranslation } from "react-i18next";
import { TextElementPropsType } from "./types";
import Text from "./styles";

export default React.memo(function TextElement(props: TextElementPropsType) {
  const { text, ...textProps } = props;

  const { t } = useTranslation();

  const textLength = `${text}`.length;

  return (
    <Text length={textLength} {...textProps}>
      {t(`${text}`)}
    </Text>
  );
});
