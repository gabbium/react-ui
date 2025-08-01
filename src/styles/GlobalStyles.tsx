import { css, Global, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: hsl(${theme.colors.border ?? "0 0% 0%"});
        }

        html {
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          tab-size: 4;
          font-family: system-ui, sans-serif;
        }

        body {
          margin: 0;
          line-height: inherit;
          background: hsl(${theme.colors.background});
          color: hsl(${theme.colors.text});
        }

        hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }

        abbr:where([title]) {
          text-decoration: underline dotted;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }

        b,
        strong {
          font-weight: bolder;
        }

        code,
        kbd,
        samp,
        pre {
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 1em;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          font-weight: inherit;
          line-height: inherit;
          color: inherit;
          margin: 0;
          padding: 0;
        }

        button,
        select {
          text-transform: none;
        }

        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }

        :-moz-focusring {
          outline: auto;
        }

        :-moz-ui-invalid {
          box-shadow: none;
        }

        progress {
          vertical-align: baseline;
        }

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }

        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }

        summary {
          display: list-item;
        }

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }

        fieldset {
          margin: 0;
          padding: 0;
        }

        legend {
          padding: 0;
        }

        ol,
        ul,
        menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        dialog {
          padding: 0;
        }

        textarea {
          resize: vertical;
        }

        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: hsl(${theme.colors.text});
        }

        button,
        [role="button"] {
          cursor: pointer;
        }

        :disabled {
          cursor: default;
        }

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block;
          vertical-align: middle;
        }

        img,
        video {
          max-width: 100%;
          height: auto;
        }
      `}
    />
  );
};
