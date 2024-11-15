import { render } from "@testing-library/vue";
import Button from "./Button.vue";

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
    
    expect(component.html()).toBe('<button data-testid="button" class="px-5 py-2 rounded drop-shadow-md font-normal my-2 bg-green hover:bg-green-hover">Name Button</button>')
  });
});
