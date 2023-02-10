import { render, fireEvent } from "@testing-library/vue";
import SingIn from "./SingIn.vue";

describe("Component SingIn", () => {
  test("Sing Render", () => {
    const component = render(SingIn);

    expect(component).toBeDefined();
  });

  test("Input label", () => {
    const { getByTestId } = render(SingIn);
    const labelEmail = getByTestId("email-id");
    const labelPassword = getByTestId("password-id");

    expect(labelEmail.textContent).toBe("E-mail");
    expect(labelPassword.textContent).toBe("Password");
  });

  test("Input label", async() => {
    const { getByTestId } = render(SingIn);

    const labelEmail = getByTestId("email-id");
    const labelPassword = getByTestId("password-id");
    const btnPassword = getByTestId("btn-id");

    await fireEvent.update(labelEmail, 'bob@gmail.com');
    await fireEvent.update(labelPassword, 'bobfriend');

    await fireEvent.click(btnPassword);

    console.log(btnPassword)
    // expect(labelEmail.textContent).toBe("bob@gmail.com");
    // expect(labelPassword.textContent).toBe("bobfriend");
  });
});
