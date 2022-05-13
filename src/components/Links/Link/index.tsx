import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "components/Typography";
import { LinkTypeProps } from "../types";

export default function Link({ to, children }: LinkTypeProps) {
  let content;
  if (typeof children === "string") {
    content = (
      <Typography.P2
        hover={{
          decoration: "underline",
        }}
        capitalizeFirstLetter
        text={children}
      />
    );
  } else {
    content = children;
  }
  return <RouterLink to={to}>{content}</RouterLink>;
}
