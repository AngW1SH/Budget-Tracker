import { ValidationConfigData } from "@/shared/utils";

export const generateSignUpConfig = (inputData: any): ValidationConfigData => {
  return [
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
    {
      label: "repeatPassword",
      filters: [
        {
          name: "match-value",
          args: [inputData.password],
          errorMessage: "Passwords must match",
        },
      ],
    },
  ];
};
