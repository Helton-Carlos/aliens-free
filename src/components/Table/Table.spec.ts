import { render } from "@testing-library/vue";
import Table from "./Table.vue";

describe("Table component", () => { 
  test("Render Table", () => {
    const component = render(Table);
    
    expect(component).toBeDefined();
  });
});
