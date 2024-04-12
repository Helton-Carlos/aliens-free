import { render, fireEvent } from "@testing-library/vue";
import Login from "./Login.vue";

describe("Page Login ", () => {
  test("Render Login", () => {
    const wrapper = render(Login);

    expect(wrapper).toBeDefined();
  });

  test("Button Sign In", async () => {
    const { getByTestId } = render(Login);

    const button = getByTestId('button-sing-in');

    await fireEvent.click(button);

    const email = getByTestId('email-id');
    const password = getByTestId('password-id');
    
    expect(email).toBeDefined();
    expect(password).toBeDefined();
  });

  test("Button Sign Up", async () => {
    const { getByTestId } = render(Login);

    const button = getByTestId('button-sing-up');

    await fireEvent.click(button);

    const name = getByTestId('name-id');
    const email = getByTestId('email-id');
    const password = getByTestId('password-id');
    const passwordConfirm = getByTestId('password-confirm-id');
    
    expect(name).toBeDefined();
    expect(email).toBeDefined();
    expect(password).toBeDefined();
    expect(passwordConfirm).toBeDefined();
  });
});
