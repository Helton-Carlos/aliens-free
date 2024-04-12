import { render } from "@testing-library/vue";
import Input from "./Input.vue";

const value = {
  label: "Digite seu E-mail",
  id: "e-mail",
  placeholder: "Your e-mail",
  type: "e-mail",
  modelValue: "jonh@gmail.com"
}

describe("Input component", () => {
  test("Render Input", () => {
    const component = render(Input, {
      props: value
    });

    expect(component).toBeDefined();
  });

  test("Props Label", () => {
    const { getByText } = render(Input, {
      props: value,
    });

    const input = getByText("Digite seu E-mail")

    expect(input.textContent).toBe("Digite seu E-mail");
  });

  test("Props Input", () => {
    const input = render(Input, {
      props: value
    });

    expect(input.getByTestId('add-word-input')).toBeDefined();
  });
});
