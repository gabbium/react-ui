export interface Transitions {
  duration: string;
  timing: string;
}

export const createTransitions = (): Transitions => ({
  duration: "150ms",
  timing: "cubic-bezier(0.4, 0, 0.2, 1)",
});
