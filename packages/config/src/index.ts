export const ARMIN_ENVIRONMENTS = [
  'development',
  'test',
  'staging',
  'production',
] as const;

export type ArminEnvironment =
  (typeof ARMIN_ENVIRONMENTS)[number];