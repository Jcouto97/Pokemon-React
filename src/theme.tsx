import React, { ReactNode, FC } from "react";
import { ThemeProvider } from "styled-components";

//prop da children vai ser react node no app.tsx
interface IThemeProps {
  children?: ReactNode;
}

//objeto com variaveis que queremos usar no projeto
const theme = {
  colors: {
    primaryColor: "#fddb2a",
    secondaryColor: "#fff4bd",
    bordersColor: "#cfc3c3",
  },
  grid: {
    // gridDisplay: "1fr 1fr 1fr 1fr",
    gridDisplay: "repeat(auto-fit, minmax(300px, 4fr))",
  },
};

//component
//FC para nao precisar sempre de descontruir props
const Theme: FC<IThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

