import React from "react";
import { useTheme } from "@emotion/react";
import { SingleValue } from "react-select";
import { Flex } from "components/Wrappers";
import Typography from "components/Typography";
import { IconButton, Button } from "components/Buttons";
import { SearchIcon } from "assets/svgs";
import { useTranslation } from "react-i18next";
import { NativeSelectInput } from "components/Inputs";

export default function Actions() {
  const theme = useTheme();
  const { i18n } = useTranslation();

  const options = [
    {
      label: "En",
      value: "en",
    },
    {
      label: "Ar",
      value: "ar",
    },
  ];

  return (
    <Flex className="header--actions settings" gap="40px" align="center">
      <IconButton color={theme.colors.white} Icon={SearchIcon} />
      <NativeSelectInput
        options={options}
        name="lang"
        label={<Typography.P2 text="LG" color={theme.colors.white} />}
        onChange={(option) => {
          if (option) {
            const value = option as SingleValue<any>;
            i18n.changeLanguage(value.value);
          }
        }}
        withBorder={false}
      />
      <Button rounded>
        <Typography.P2
          weight={300}
          text="signIn"
          color={theme.colors.white}
          capitalizeFirstLetter
        />
      </Button>
    </Flex>
  );
}
