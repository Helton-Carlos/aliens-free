import { render } from "@testing-library/vue";
import Card from "./Card.vue";

describe("Card component", () => {
  test("Render Button", () => {
    const component = render(Card);

    expect(component).toBeDefined();
  });

  test.only("Props Card", () => {
    const component = render(Card, {
      props: {
        title: "name card",
        subtitle: "context",
        imagem: "@/assets/card.jpg",
        arrow: true,
      },
    });

    const imgProps = document.querySelector("img") as HTMLImageElement;
    
    expect(component.getByText("name card")).toBeDefined();
    expect(component.getByText("context")).toBeDefined();
    expect(imgProps.src).toContain("@/assets/card.jpg");
  });
});
