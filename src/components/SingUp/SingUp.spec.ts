import { render, fireEvent } from "@testing-library/vue";
import SingUp from "./SingUp.vue";

describe("Component SingUp", () => {
  test("SingUp Render", () => {
    const component = render(SingUp);

    expect(component).toBeDefined();
  });

  test("Input label", () => {
    const { getByTestId } = render(SingUp);

    const labelName = getByTestId("name-id");
    const labelEmail = getByTestId("email-id");
    const labelPassword = getByTestId("password-id");
    const labelPasswordConfirm = getByTestId("password-confirm-id");

    expect(labelName.textContent).toBe("Name");
    expect(labelEmail.textContent).toBe("E-mail");
    expect(labelPassword.textContent).toBe("Password");
    expect(labelPasswordConfirm.textContent).toBe("Confirm the password");
  });

  test("Input label", async() => {
    const { getByTestId } = render(SingUp);

    const labelName = getByTestId("name-id");
    const labelEmail = getByTestId("email-id");
    const labelPassword = getByTestId("password-id");
    const labelPasswordConfirm = getByTestId("password-confirm-id");

    const btnPassword = getByTestId("btn-id");
    
    await fireEvent.update(labelName, 'bob son');
    await fireEvent.update(labelEmail, 'bob@gmail.com');
    await fireEvent.update(labelPassword, 'bobfriend');
    await fireEvent.update(labelPasswordConfirm, 'bobfriend');

    await fireEvent.click(btnPassword);

    expect(labelName).toBeDefined()
    expect(labelEmail).toBeDefined()
    expect(labelPassword).toBeDefined()
    expect(labelPasswordConfirm).toBeDefined()
  });
});
