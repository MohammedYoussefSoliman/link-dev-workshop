import React from "react";
import Aside from "components/Aside";
import { LogoWhite } from "assets/images";

export default function Logo() {
  return (
    <Aside className="header--aside">
      <img src={LogoWhite} alt="logo" />
    </Aside>
  );
}
