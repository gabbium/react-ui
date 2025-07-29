import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "@emotion/react",
        "@emotion/styled",
        "@radix-ui/react-label",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@tanstack/react-form",
        "react",
        "react-dom",
      ],
      output: {
        entryFileNames: "[name].js",
        globals: {
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
          "@radix-ui/react-label": "RadixLabel",
          "@radix-ui/react-separator": "RadixSeparator",
          "@radix-ui/react-slot": "RadixSlot",
          "@tanstack/react-form": "TanstackReactForm",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.test.@(js|jsx|mjs|ts|tsx)", "**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    }),
    tsConfigPaths({
      projects: ["./tsconfig.app.json"],
    }),
  ],
});
