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
    expect(title.textContent).toBe("Trade anytime anywhere");

    await fireEvent.click(getByTestId("btn-id"));
    expect(title.textContent).toBe("Secure Your Finances with Our Platform");

    await fireEvent.click(getByTestId("btn-id"));
    expect(title.textContent).toBe("Dive into the World of Investments");
  });

  test("Onboarding Subtitle", async () => {
    const { getByTestId } = render(Onboarding);

    const subtitle = getByTestId("subtitle-id");
    expect(subtitle.textContent).toBe(
      "Our platform offers you the flexibility to manage your investments on the go, ensuring you never miss an opportunity."
    );

    await fireEvent.click(getByTestId("btn-id"));
    expect(subtitle.textContent).toBe(
      "Rely on advanced security features to keep your funds protected and your peace of mind intact."
    );

    await fireEvent.click(getByTestId("btn-id"));
    expect(subtitle.textContent).toBe(
      "A Beginner's Primer on Building Wealth through Smart Investing, advanced security."
    );
  });
});
