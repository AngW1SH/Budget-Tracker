import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import DaySummary from "../DaySummary.vue";

describe("Day Summary Widget UI", () => {
  test("UI snapshot test", () => {
    const wrapper = mount(DaySummary);

    expect(wrapper).toMatchSnapshot();
  });
});
