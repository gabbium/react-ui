export interface TypographyScale {
  fontSize: string;
  lineHeight: string;
}

export type FontWeights = {
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

export type TypographyVariants = {
  [key: string]: TypographyScale;
};

export interface Typography {
  variants: TypographyVariants;
  weights: FontWeights;
}
