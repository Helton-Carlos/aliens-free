import { render } from "@testing-library/vue";
import Button from "./Button.vue";

describe("Button component", () => {
  test.only("Render Button", async () => {
		const component = render(Button)
		
    expect(component).toBeDefined()
  });
});
