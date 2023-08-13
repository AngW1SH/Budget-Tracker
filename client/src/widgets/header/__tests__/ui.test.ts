import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../ui/Header/Header.vue";
import Logo from "../ui/Logo/Logo.vue";
import Menu from "../ui/Menu/Menu.vue";
import User from "../ui/User/User.vue";

describe("Header Widget UI", () => {
  test("contains UI-elements", () => {
    const header = mount(Header);
    expect(header.findComponent(Logo).exists()).toBe(true);
    expect(header.findComponent(Menu).exists()).toBe(true);
    expect(header.findComponent(User).exists()).toBe(true);
  });
  test("snapshot UI testing", () => {
    const header = mount(Header);
    expect(header.element).toMatchSnapshot();
  });
});
