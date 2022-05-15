import React from "react";
import theme from "theme";
import { TextElementPropsType } from "./types";

import TextElement from "./TextComponent";

export default function Typography(Props: TextElementPropsType) {
  return <TextElement as="span" {...Props} />;
}

const h1 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.h1;
  const fontWeight = 600;

  return (
    <TextElement
      as="h1"
      fontSize={fontSizes}
      weight={fontWeight}
      isHeader
      {...Props}
    />
  );
};

const h2 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.h2;
  const fontWeight = 600;

  return (
    <TextElement
      as="h2"
      fontSize={fontSizes}
      weight={fontWeight}
      isHeader
      {...Props}
    />
  );
};

const h3 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.h3;
  const fontWeight = 600;

  return (
    <TextElement
      as="h3"
      fontSize={fontSizes}
      weight={fontWeight}
      isHeader
      {...Props}
    />
  );
};
const h4 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.h4;
  const fontWeight = 600;

  return (
    <TextElement
      as="h4"
      fontSize={fontSizes}
      weight={fontWeight}
      isHeader
      {...Props}
    />
  );
};

const h5 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.h5;
  const fontWeight = 600;

  return (
    <TextElement
      as="h4"
      fontSize={fontSizes}
      weight={fontWeight}
      isHeader
      {...Props}
    />
  );
};

const p1 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.p1;
  const fontWeight = 500;

  return (
    <TextElement as="p" fontSize={fontSizes} weight={fontWeight} {...Props} />
  );
};

const p2 = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.p2;
  const fontWeight = 400;

  return (
    <TextElement as="p" fontSize={fontSizes} weight={fontWeight} {...Props} />
  );
};
const small = (Props: TextElementPropsType) => {
  const fontSizes = theme.fontSizes.small;
  const fontWeight = 300;

  return (
    <TextElement
      as="small"
      fontSize={fontSizes}
      weight={fontWeight}
      {...Props}
    />
  );
};

Typography.H1 = h1;
Typography.H2 = h2;
Typography.H3 = h3;
Typography.H4 = h4;
Typography.H5 = h5;
Typography.P1 = p1;
Typography.P2 = p2;
Typography.Small = small;
