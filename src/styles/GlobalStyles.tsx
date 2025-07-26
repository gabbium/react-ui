import { css, Global, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body,
        #root {
          height: 100%;
        }

        body {
          font-family: system-ui, sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          background: ${theme.colors.background};
          color: ${theme.colors.text};

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        * {
          border-color: ${theme.colors.border ?? "currentColor"};
          outline-color: ${theme.colors.ring ?? theme.colors.primary};
        }

        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }
      `}
    />
  );
};
