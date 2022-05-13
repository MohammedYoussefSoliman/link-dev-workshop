import React from "react";
import { Flex } from "components/Wrappers";
import Typography from "components/Typography";
import theme from "theme";

type InputErrorProps = {
  error: string;
};

export default function ErrorComponent({ error }: InputErrorProps) {
  return (
    <Flex align="center" gap="8px">
      <Typography
        text={error}
        color={theme.colors.error[200]}
        fontSize="13px"
        weight={600}
      />
    </Flex>
  );
}
