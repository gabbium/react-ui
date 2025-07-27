export interface Shadows {
  xs: string;
  sm: string;
  md: string;
}

export const createShadows = (): Shadows => ({
  xs: "0 1px 2px rgba(0,0,0,0.05)",
  sm: "0 1px 3px rgba(0,0,0,0.1)",
  md: "0 4px 6px rgba(0,0,0,0.1)",
});
