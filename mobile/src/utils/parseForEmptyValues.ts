type Value = string | Date;

type Object = Record<string, Value> | undefined;

export const parseForEmptyValues = <T extends Object>(object: T) => {
  const result: Object = {};

  for (const key in object) {
    const value = object[key];
    if (value !== '') {
      result[key] = value;
    }
  }

  return result;
};
