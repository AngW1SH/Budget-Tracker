import { ValidationConfigData } from "@/shared/utils/FormValidation/types";

export const signInConfig: ValidationConfigData = [
  {
    label: "password",
    filters: [
      {
        name: "length-min",
        args: [8],
        errorMessage: "Password must be at least 8 characters long",
      },
      {
        name: "include-special-characters",
        errorMessage: "Password must include special characters",
      },
    ],
  },
];
