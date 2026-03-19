"use client";

import { ReactNode } from "react";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  body {
    font-family: "MS Sans Serif", "Tahoma", sans-serif;
  }
`;

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
