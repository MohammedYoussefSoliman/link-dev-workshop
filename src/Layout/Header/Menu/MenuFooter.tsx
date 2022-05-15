import { Fragment } from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { Link } from "components/Links";
import Typography from "components/Typography";

type ModalContentProps = {
  onClose: () => void;
};

const footerNavigation = [
  {
    label: "privacyPolicy",
    path: "/privacyPolicy",
  },
  {
    label: "terms",
    path: "/terms",
  },
];

export default function MenuFooter({ onClose }: ModalContentProps) {
  const { colors } = useTheme();

  return (
    <Flex className="body--content__footer" direction="column" fullWidth>
      <Typography.Small
        className="copyrights"
        color={colors.white}
        text="copyrights"
      />
      <Flex align="center" as="ul" gap="16px">
        {footerNavigation.map((item, index) => (
          <Fragment key={item.label}>
            <li>
              <Link to={item.path} color={colors.white} callback={onClose}>
                {item.label}
              </Link>
            </li>
            {index < footerNavigation.length - 1 && (
              <Typography.Small weight={400} color={colors.white} text="|" />
            )}
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
}
