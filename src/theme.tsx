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
    gridDisplay: "1fr 1fr 1fr 1fr",
  },
};

//component
const Theme: FC<IThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
