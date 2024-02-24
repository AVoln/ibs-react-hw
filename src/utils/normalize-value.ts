export const toNormalizeValue = (value: string) => {
  if (!value) {
    return "";
  }

  return value.trim().toLowerCase();
};
