import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import Boarding from "./Boarding.vue";

describe("Page Boarding ", () => {
  test("Render Boarding", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/boarding",
          component: Boarding,
        },
      ],
    });

    const wrapper = render(Boarding, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeDefined();
  });
});
