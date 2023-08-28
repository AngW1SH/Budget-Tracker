import { ValidationConfigData } from "@/shared/utils";

export const forgotPasswordConfig: ValidationConfigData = [
  {
    label: "email",
    filters: [
      {
        name: "length-min",
        args: [1],
        errorMessage: "Please provide your email",
      },
    ],
  },
];
