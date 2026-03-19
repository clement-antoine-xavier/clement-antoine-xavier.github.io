"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import isPropValid from "@emotion/is-prop-valid";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type RegistryProps = {
  children: ReactNode;
};

const shouldForwardProp = (propName: string, target: unknown) => {
  if (typeof target === "string") {
    return isPropValid(propName);
  }

  return true;
};

export default function StyledComponentsRegistry({ children }: RegistryProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={shouldForwardProp}
    >
      {children}
    </StyleSheetManager>
  );
}
