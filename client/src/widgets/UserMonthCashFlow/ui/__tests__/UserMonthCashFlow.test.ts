import UserMonthCashFlow from "../UserMonthCashFlow.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("UserMonthCashFlow widget UI", () => {
  test("snapshot UI testing", () => {
    const wrapper = mount(UserMonthCashFlow);

    expect(wrapper).toMatchSnapshot();
  });
});
