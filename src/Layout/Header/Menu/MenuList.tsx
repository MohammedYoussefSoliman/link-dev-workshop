import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { Link } from "components/Links";
import Typography from "components/Typography";
import SocialBar from "components/SocialBar";
import navigationList from "../../../navigationList";

type ModalContentProps = {
  onClose: () => void;
};

export default function MenuList({ onClose }: ModalContentProps) {
  const { colors } = useTheme();
  return (
    <Flex
      flex={1}
      fullWidth
      className="body--content__list"
      justify="space-between"
      gap="40px"
    >
      <Flex as="ul" direction="column" gap="40px" flex={1}>
        {navigationList.map((item) => (
          <li key={item.label}>
            <Link to={item.path} color={colors.white} callback={onClose}>
              <Typography.H2
                color={colors.white}
                hover={{
                  decoration: "underline",
                }}
                text={item.label}
                capitalizeFirstLetter
              />
            </Link>
          </li>
        ))}
      </Flex>
      <Flex direction="column">
        <SocialBar className="social" direction="column" />
      </Flex>
    </Flex>
  );
}
