import { render } from "@testing-library/vue";
import Button from "@/components/Button/Button.vue";

describe("Button component", () => {
  test("Render Button", () => {
		const component = render(Button)
		
    expect(component).toBeDefined()
  });

  test("Props Button", () => {
		const component = render(Button, {
      slots: {
        default: 'Name Button'
      }
    })
    
    expect(component.getByText("Name Button")).toBeTruthy()
  });
});
