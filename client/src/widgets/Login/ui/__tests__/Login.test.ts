import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Login from "../Login.vue";

describe("Login widget UI", () => {
  test("UI snapshot", () => {
    const wrapper = mount(Login);

    expect(wrapper).toMatchSnapshot();
  });
});
