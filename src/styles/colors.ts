export interface Colors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  border: string;
  ring: string;
}

export const createColors = (): Colors => ({
  background: "#ffffff",
  text: "#111827",
  primary: "#1d4ed8",
  secondary: "#64748b",
  border: "#e2e8f0",
  ring: "#cbd5e1",
});
