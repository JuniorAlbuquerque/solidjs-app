const colorIterator = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

export type ColorsIterator = typeof colorIterator[number];

export type ThemeColors = {
  [key in ElementType<typeof colorIterator>]: string;
};

export type Theme = {
  colors: {
    green: ThemeColors;
    gray: ThemeColors;
  };
};
