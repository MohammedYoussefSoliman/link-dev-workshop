import React from "react";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
import Typography from "components/Typography";
import { NavLinkTypeProps } from "../types";

export default function NavigationLink({
  color,
  callback,
  to,
  children,
}: NavLinkTypeProps) {
  const { colors } = useTheme();

  return (
    <NavLink
      to={to}
      onClick={() => {
        if (callback) {
          callback();
        }
      }}
    >
      {({ isActive }) => (
        <Typography.P2
          hover={
            isActive
              ? {
                  decoration: "underline",
                }
              : undefined
          }
          color={isActive ? colors.secondary[200] : color}
          capitalizeFirstLetter
          text={children}
        />
      )}
    </NavLink>
  );
}
