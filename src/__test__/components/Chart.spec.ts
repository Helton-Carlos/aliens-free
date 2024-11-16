import { render } from "@testing-library/vue";
import Chart from "@/components/Chart/Chart.vue";

describe("Chart component", () => {
  test("Render Chart", () => {
    const component = render(Chart);

    expect(component).toBeDefined();
  });

  test("Truthy Chart", () => {
    const { getByTestId } = render(Chart)

    const chartElement = getByTestId('chart')
  
    expect(chartElement).toBeTruthy()
  });
});
