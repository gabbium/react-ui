export type Spacing = (factor: number) => string;

export const createSpacing = (): Spacing => (factor: number) => `${0.25 * factor}rem`;
