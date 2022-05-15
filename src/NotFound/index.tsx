import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "components/Wrappers";
import { Button } from "components/Buttons";
import { NotFound as NotFoundLottie } from "assets/lotties";
import { useTheme } from "@emotion/react";

export default function NotFound() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  return (
    <Flex
      gap="40px"
      direction="column"
      align="center"
      justify="center"
      fullWidth
      height="80vh"
    >
      <NotFoundLottie />
      <Button onClick={() => navigate("/")} color={colors.primary[300]}>
        home
      </Button>
    </Flex>
  );
}
