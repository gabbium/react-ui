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
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled", "@radix-ui/react-separator"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
          "@radix-ui/react-label": "radixLabel",
          "@radix-ui/react-separator": "radixSeparator",
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
