import { render } from "@testing-library/vue";
import Bitcon from "../Bitcon.vue";
import { createRouter, createWebHistory } from "vue-router";

describe("Page Bitcon ", () => {
  test("Render Bitcon", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/bitcon",
          component: Bitcon,
          meta: {
            NavBar: true,
            title: "Bitcon",
          },
        },
      ],
    });

    const wrapper = render(Bitcon, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeDefined();
  });

  test("Title Bitcon", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/bitcon",
          component: Bitcon,
          meta: {
            NavBar: true,
            title: "Bitcon",
          },
        },
      ],
    });

    const { getByTestId } = render(Bitcon, {
      global: {
        plugins: [router],
      },
    });

    const title = getByTestId("title-id");

    expect(title.textContent).toBe("🪙");
  });
});
