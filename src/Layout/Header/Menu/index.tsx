import React from "react";
import { IconButton } from "components/Buttons";
import { MenuIcon } from "assets/svgs";
import { Flex } from "components/Wrappers";
import Modal from "components/Modal";
import { useTheme } from "@emotion/react";
import ModalContent from "./ModalContent";

export default function Menu() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const theme = useTheme();

  return (
    <>
      <Flex align="center" justify="center" className="header--menu">
        <IconButton
          color={theme.colors.white}
          onClick={() => setOpenModal(true)}
          Icon={MenuIcon}
          size="lg"
        />
      </Flex>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalContent onClose={() => setOpenModal(false)} />
      </Modal>
    </>
  );
}
