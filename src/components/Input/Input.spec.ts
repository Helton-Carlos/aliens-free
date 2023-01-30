import { render, fireEvent } from "@testing-library/vue";
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

//   test.only("Input", async () => {
//     const component = render(Input);
    
//     // const test = findAllByTestId("add-word-input");
    
//     // fireEvent.update(test, {target: {value: 'matti'}});
 
//     // expect(test).toBeDefined();
//   });
});
