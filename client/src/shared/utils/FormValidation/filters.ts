const validateMinLength = (input: string, limit: number) => {
  return input.length >= limit;
};

const validateMatchValue = (input: string, value: string) => {
  return input == value;
};

const validateIncludeSpecialCharacters = (input: string) => {
  return new RegExp("^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$").test(input);
};

export const validateFunctions = {
  "length-min": validateMinLength,
  "include-special-characters": validateIncludeSpecialCharacters,
  test: validateMatchValue,
  "match-value": validateMatchValue,
};
