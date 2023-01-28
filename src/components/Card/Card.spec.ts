import { render } from "@testing-library/vue";
import Card from "./Card.vue";

describe("Card component", () => {
  test("Render Card", () => {
    const component = render(Card);

    expect(component).toBeDefined();
  });

  test("Props Card", () => {
    const component = render(Card, {
      props: {
        title: "Down of the EURO",
        subtitle: "We look at three important factors that affect U.S. dollar value, and how to determine",
        imagem: "@/assets/card.jpg",
      },
    });

    const imgProps = document.querySelector("img") as HTMLImageElement;
    
    expect(component.getByText("Down of the EURO")).toBeDefined();
    expect(component.getByText("We look at three important factors that affect U.S. dollar value, and how to determine")).toBeDefined();
    expect(imgProps.src).toContain("@/assets/card.jpg");
  });
});
