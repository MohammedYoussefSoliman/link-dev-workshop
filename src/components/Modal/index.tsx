import React from "react";
import { Modal as MuiModal } from "@mui/material";
import MuiThemeProvider from "components/MuiThemeProvider";
import Wrapper from "./styles";

interface ModalPropsType {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalPropsType) {
  return (
    <MuiThemeProvider>
      <MuiModal open={open} onClose={onClose}>
        <Wrapper>{children}</Wrapper>
      </MuiModal>
    </MuiThemeProvider>
  );
}
