import { render, fireEvent } from "@testing-library/vue";
import Onboarding from "./Onboarding.vue";

describe("Component Onboarding", () => {
  test("component Onboarding", () => {
    const component = render(Onboarding);

    expect(component).toBeDefined();
  });

  test("Onboarding Title", async () => {
    const { getByTestId } = render(Onboarding);

    const title = getByTestId("title-id");
    expect(title.textContent).toBe("Trade anytime anywhere 1");

    await fireEvent.click(getByTestId("btn-id"));
    expect(title.textContent).toBe("Trade anytime anywhere 2");

    await fireEvent.click(getByTestId("btn-id"));
    expect(title.textContent).toBe("Trade anytime anywhere 3");
  });

  test.only("Onboarding Subtitle", async () => {
    const { getByTestId } = render(Onboarding);

    const subtitle = getByTestId("subtitle-id");
    expect(subtitle.textContent).toBe(
      "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    );

    await fireEvent.click(getByTestId("btn-id"));
    expect(subtitle.textContent).toBe(
      "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    );

    await fireEvent.click(getByTestId("btn-id"));
    expect(subtitle.textContent).toBe(
      "3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    );
  });
});
