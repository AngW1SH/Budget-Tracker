import { describe, expect, test } from "vitest";
import { ValidationConfigData } from "../types";
import { validate } from "../validation";

describe("Form validation function", () => {
  test("Multiple filters", () => {
    const config: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "include-special-characters",
            errorMessage:
              "Password must include at least one special character",
          },
          {
            name: "length-min",
            args: [10],
            errorMessage: "Password must be at least 10 characters long",
          },
        ],
      },
    ];

    expect(validate({ password: "short!" }, config)).toEqual([
      {
        field: "password",
        message: "Password must be at least 10 characters long",
      },
    ]);

    expect(
      validate({ password: "longwithnospecialcharacters" }, config)
    ).toEqual([
      {
        field: "password",
        message: "Password must include at least one special character",
      },
    ]);

    expect(validate({ password: "long!withspecialcharacter" }, config)).toEqual(
      []
    );
  });

  test("Multiple fields", () => {
    const config1: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "include-special-characters",
            errorMessage:
              "Password must include at least one special character",
          },
        ],
      },
      {
        label: "passwordRepeat",
        filters: [
          {
            name: "match-value",
            args: ["passwordValue"],
            errorMessage: "Passwords must match",
          },
        ],
      },
    ];

    const config2: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "include-special-characters",
            errorMessage:
              "Password must include at least one special character",
          },
        ],
      },
      {
        label: "passwordRepeat",
        filters: [
          {
            name: "match-value",
            args: ["passwordValue!"],
            errorMessage: "Passwords must match",
          },
        ],
      },
    ];

    expect(
      validate(
        { password: "passwordValue", passwordRepeat: "passwordValue" },
        config1
      )
    ).toEqual([
      {
        field: "password",
        message: "Password must include at least one special character",
      },
    ]);
    expect(
      validate(
        { password: "passwordValue!", passwordRepeat: "passwordValue!" },
        config2
      )
    ).toEqual([]);
  });

  test("Message priority", () => {
    const config: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "include-special-characters",
            errorMessage:
              "Password must include at least one special character",
          },
          {
            name: "length-min",
            args: [10],
            errorMessage: "Password must be at least 10 characters long",
          },
        ],
      },
    ];

    expect(validate({ password: "short" }, config)).toEqual([
      {
        field: "password",
        message: "Password must include at least one special character",
      },
    ]);
  });

  test("Minimal length filter", () => {
    const config: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "length-min",
            args: [8],
            errorMessage: "Password must be at least 8 characters long",
          },
        ],
      },
    ];

    expect(validate({ password: "short" }, config)).toEqual([
      {
        field: "password",
        message: "Password must be at least 8 characters long",
      },
    ]);

    expect(validate({ password: "longenough" }, config)).toEqual([]);
  });

  test("Include special characters filter", () => {
    const config: ValidationConfigData = [
      {
        label: "password",
        filters: [
          {
            name: "include-special-characters",
            errorMessage:
              "Password must include at least one special character",
          },
        ],
      },
    ];

    expect(validate({ password: "nospecialcharacters" }, config)).toEqual([
      {
        field: "password",
        message: "Password must include at least one special character",
      },
    ]);

    expect(validate({ password: "includes!specialcharacter" }, config)).toEqual(
      []
    );
  });

  test("Match value filter", () => {
    const config: ValidationConfigData = [
      {
        label: "passwordRepeat",
        filters: [
          {
            name: "match-value",
            args: ["passwordvalue"],
            errorMessage: "Passwords must match",
          },
        ],
      },
    ];

    expect(validate({ passwordRepeat: "doesntmatch" }, config)).toEqual([
      {
        field: "passwordRepeat",
        message: "Passwords must match",
      },
    ]);

    expect(validate({ passwordRepeat: "passwordvalue" }, config)).toEqual([]);
  });
});
