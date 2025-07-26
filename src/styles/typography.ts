export interface TypographyScale {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
}

export interface Typography {
  textSm: TypographyScale;
  textMd: TypographyScale;
  textLg: TypographyScale;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}

export const createTypography = (): Typography => ({
  textSm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
  textMd: { fontSize: "1rem", lineHeight: "1.5rem" },
  textLg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
});
