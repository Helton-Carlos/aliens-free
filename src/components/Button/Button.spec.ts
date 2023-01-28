import { render } from "@testing-library/vue";
import Button from "./Button.vue";

describe("Button component", () => {
  test("Render Button", async () => {
		const component = render(Button)
		
    expect(component).toBeDefined()
  });

  test("Props Button", async () => {
		const component = render(Button, {
      props: {
        title: "title",
        color: "dark"
      },
    })

    expect(component.getByText('title')).toBeDefined();
  });
});
