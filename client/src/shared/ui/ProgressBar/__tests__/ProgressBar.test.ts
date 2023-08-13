import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ProgressBar from "../ProgressBar.vue";

describe("ProgressBar shared UI-component", () => {
  test("uses 'progress' prop to display percentage", () => {
    const progressBar = mount(ProgressBar, {
      props: {
        progress: 20,
      },
    });

    expect(progressBar.find("div:contains(20%)").exists()).toBe(true);
  });

  /*
  The next two tests are too implementation-specific,
  but I couldn't think of a way to select the goal-line somehow differently,
  because I really didn't want to use data-test attributes
  */
  test("displays the goal-line when the 'goal' prop is provided", () => {
    const progressBar = mount(ProgressBar, {
      props: {
        progress: 20,
        goal: 40,
      },
    });

    expect(progressBar.find(".absolute").exists()).toBe(true);
  });

  test("doesn't display the goal-line when the 'goal' prop is not provided", () => {
    const progressBar = mount(ProgressBar, {
      props: {
        progress: 20,
      },
    });

    expect(progressBar.find(".absolute").exists()).toBe(false);
  });

  test("snapshot UI", () => {
    const progressBar = mount(ProgressBar, {
      props: {
        progress: 20,
      },
    });
    expect(progressBar.element).toMatchSnapshot();
  });
});
