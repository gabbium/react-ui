export interface Colors {
  background: string;
  text: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  input: string;
  border: string;
  ring: string;
}

export const createColors = (): Colors => ({
  background: "0 0% 100%",
  text: "222 47% 11%",
  primary: "221 19% 24%",
  primaryForeground: "0 0% 98%",
  secondary: "210 12% 94%",
  secondaryForeground: "221 19% 24%",
  accent: "210 12% 94%",
  accentForeground: "221 19% 24%",
  muted: "210 12% 96%",
  mutedForeground: "215 16% 46%",
  destructive: "5 80% 48%",
  input: "0 0% 92%",
  border: "214 20% 86%",
  ring: "214 16% 68%",
});
