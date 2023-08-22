export type ValidationConfigData = {
  label: string;
  filters: (
    | ValidateMinLengthData
    | ValidateIncludeSpecialCharactersData
    | ValidateMatchValue
  )[]; // Pass the label of the filter or the name and the arguments in an array
}[];

export interface FilterData {
  name: string;
  errorMessage: string;
}

export interface ValidateMinLengthData extends FilterData {
  name: "length-min";
  args: [number];
}

export interface ValidateIncludeSpecialCharactersData extends FilterData {
  name: "include-special-characters";
}

export interface ValidateMatchValue extends FilterData {
  name: "match-value";
  args: [string];
}

export interface FieldData {
  [key: string]: any;
}

export interface ValidateResultError {
  field: string;
  message: string;
}
