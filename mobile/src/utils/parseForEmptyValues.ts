export const parseForEmptyValues = (object: Record<string, string> = {}) => {
  const result: Record<string, string> = {};

  for (const key in object) {
    const value = object[key];
    if (value !== '') {
      result[key] = value;
    }
  }

  return result;
};
