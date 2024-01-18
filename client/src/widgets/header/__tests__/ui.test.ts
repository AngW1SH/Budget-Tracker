import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../ui/Header/Header.vue";
import { routes } from "@/app/main";
import { createMemoryHistory, createRouter } from "vue-router";

describe("Header Widget UI", () => {
  /* test("contains UI-elements", () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    const header = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    expect(header.findComponent(Logo).exists()).toBe(true);
    expect(header.findComponent(Menu).exists()).toBe(true);
    expect(header.findComponent(User).exists()).toBe(true);
  }); */
  test("snapshot UI testing", () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    const header = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    expect(header.element).toMatchSnapshot();
  });
});
