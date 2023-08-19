import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VerticalRatioBar from "../VerticalRatioBar.vue";

describe("Vertical Ratio Bar shared UI-component", () => {
  test("renders the same html for equal ratios", () => {
    const wrapperA = mount(VerticalRatioBar, {
      props: {
        upper: 20,
        lower: 80,
      },
    });
    const wrapperB = mount(VerticalRatioBar, {
      props: {
        upper: 1,
        lower: 4,
      },
    });

    const htmlA = wrapperA.html();
    const htmlB = wrapperB.html();

    expect(htmlA).toEqual(htmlB);
  });
  test("snapshot UI testing", () => {
    const wrapper = mount(VerticalRatioBar, {
      props: {
        upper: 20,
        lower: 80,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
