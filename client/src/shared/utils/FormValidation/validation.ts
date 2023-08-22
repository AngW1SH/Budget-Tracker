import { validateFunctions } from "./filters";
import { ValidationConfigData, FieldData, ValidateResultError } from "./types";

export const validate = (
  data: FieldData,
  config: ValidationConfigData
): ValidateResultError[] => {
  const fields = Object.keys(data);

  const result: ValidateResultError[] = [];

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    const filterData = config.find((configField) => configField.label == field);

    if (!filterData) continue;

    filterData.filters.every((filter) => {
      /*
      Having filterFunction as any was the only way I could make typescript shut up.
      But it doesn't really matter as all the args are validated by typescript in the ValidationConfigData type
      */
      const filterFunction: any = validateFunctions[filter.name];

      if (!filterFunction) return true;

      const filterResult =
        "args" in filter
          ? filterFunction(data[field], ...filter.args)
          : filterFunction(data[field]);

      if (!filterResult) {
        result.push({
          field: field,
          message: filter.errorMessage,
        });

        return false; // we only need to display one issue with a field
      }

      return true;
    });
  }

  return result;
};
