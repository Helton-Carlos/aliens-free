import { render } from "@testing-library/vue";
import Nav from "./Nav.vue";

describe("Nav component", () => {
  test.only("Render Nav", () => {
    const component = render(Nav);

    expect(component).toBeDefined();
  });


});
