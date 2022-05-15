import React from "react";
import { useTheme } from "@emotion/react";
import { Link } from "components/Links";
import Typography from "components/Typography";
import { IconButton } from "components/Buttons";
import { Flex } from "components/Wrappers";
import socialMediaList from "app/socialMediaList";

type SocialBarPropsType = {
  direction?: "column" | "row";
  className?: string;
};

export default function SocialBar({
  direction = "row",
  className,
}: SocialBarPropsType) {
  const { colors } = useTheme();

  return (
    <Flex
      className={className}
      direction={direction}
      gap={direction === "row" ? "60px" : "10px"}
    >
      <Typography.P2
        text="followUs"
        color={colors.white}
        capitalizeFirstLetter
      />
      <Flex gap="5px" align="center">
        {socialMediaList.map(({ label, url, Icon }) => (
          <Link key={label} to={url} relative={false}>
            <IconButton Icon={Icon} color={colors.white} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
