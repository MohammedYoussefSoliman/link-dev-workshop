import React from "react";
import Wrapper from "./styles";

interface ModalPropsType {
  children: React.ReactNode;
  anchorEl: any;
  onClose: () => void;
}

export default function Modal({ children, anchorEl, onClose }: ModalPropsType) {
  // const handlePopoverOpen = (event: React.ChangeEvent<any>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  const open = Boolean(anchorEl);

  return (
    <Wrapper
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      onClose={onClose}
    >
      {children}
    </Wrapper>
  );
}
