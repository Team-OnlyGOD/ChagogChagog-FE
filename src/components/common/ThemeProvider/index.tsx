import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { GlobalStyle } from "../../../style/GlobalStyle";
import { theme } from "../../../style/theme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
