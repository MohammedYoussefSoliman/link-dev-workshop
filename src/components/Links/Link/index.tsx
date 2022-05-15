import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "components/Typography";
import { LinkTypeProps } from "../types";

export default function Link({
  color,
  callback,
  to,
  relative = true,
  children,
}: LinkTypeProps) {
  let content;

  if (typeof children === "string") {
    content = (
      <Typography.P2
        hover={{
          decoration: "underline",
        }}
        color={color}
        capitalizeFirstLetter
        text={children}
      />
    );
  } else {
    content = children;
  }

  if (!relative) {
    return (
      <a href={to} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <RouterLink
      to={to}
      onClick={() => {
        if (callback) {
          callback();
        }
      }}
    >
      {content}
    </RouterLink>
  );
}
