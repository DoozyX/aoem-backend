export function enumToId<E extends Record<string, string>>(
  enumObj: E,
  value: E[keyof E],
): number {
  const enumValues = Object.values(enumObj);
  return enumValues.indexOf(value);
}

export function idToEnum<E extends Record<string, string>>(
  enumObj: E,
  int: number,
): E[keyof E] {
  const enumKeys = Object.keys(enumObj);
  return enumKeys[int] as E[keyof E];
}
