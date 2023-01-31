import { render } from "@testing-library/vue";
import Input from "./Input.vue";

describe("Input component", () => {
  test("Render Input", () => {
    const component = render(Input);

    expect(component).toBeDefined();
  });

  test("Props Label", () => {
    const label = render(Input, {
      props: {
        label: "Your e-mail",
      },
    });

    expect(label.getByText("Your e-mail")).toBeDefined();
  });

  test("Props Input", () => {
    const inputs = render(Input, {
      props: {
        id: "e-mail",
        placeholder: "Your e-mail",
        type: "e-mail",
      },
    });

    expect(inputs.getByTestId('add-word-input')).toBeDefined();
  });
});
