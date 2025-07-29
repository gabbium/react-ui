import { ThemeProvider } from "@emotion/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

import { baseTheme, darkTheme, GlobalStyles } from "../src";

import "./styles/storybook.css";

const withThemeProvider = (Story, context) => {
  const theme = context?.globals?.theme === "dark" ? darkTheme : baseTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeProvider,
];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    a11y: {
      test: "todo",
    },
    backgrounds: { disable: true },
    docs: {
      toc: true,
    },
  },
};

export default preview;
