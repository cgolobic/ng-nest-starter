export function isUndefinedOrNull(test: any) {
  return (test === undefined || test === null);
}

export function isDefinedAndNotNull(test: any) {
  return !isUndefinedOrNull(test);
}