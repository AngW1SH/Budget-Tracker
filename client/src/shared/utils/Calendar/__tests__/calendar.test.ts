import { describe, expect, test } from "vitest";
import { generateMonth } from "../calendar";

describe("Calendar shared utils-component", () => {
  test("Generates a month matrix for August 2023", () => {
    const expected = [
      [null, "1", "2", "3", "4", "5", "6"],
      ["7", "8", "9", "10", "11", "12", "13"],
      ["14", "15", "16", "17", "18", "19", "20"],
      ["21", "22", "23", "24", "25", "26", "27"],
      ["28", "29", "30", "31", null, null, null],
    ];
    const actual = generateMonth(7, 2023);

    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });

  test("Incorrect month or year number-values", () => {
    expect(generateMonth(-1, 2023)).toEqual([]);
    expect(generateMonth(12, 2023)).toEqual([]);
    expect(generateMonth(100, 2023)).toEqual([]);
    expect(generateMonth(3, -10)).toEqual([]);
    expect(generateMonth(12, -1)).toEqual([]);
    expect(generateMonth(-10, -10)).toEqual([]);
  });
});
