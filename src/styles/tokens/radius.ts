export interface Radius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export const createRadius = (): Radius => ({
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
});
