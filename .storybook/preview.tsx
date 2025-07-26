import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react-vite";

import { lightTheme, darkTheme, GlobalStyles } from "../src";

const withThemeProvider = (Story, context) => {
  const mode = context?.globals?.backgrounds?.value === "dark" ? "dark" : "light";
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    a11y: {
      test: "todo",
    },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#111827" },
        light: { name: "Light", value: "#ffffff" },
      },
    },
  },
};

export default preview;
