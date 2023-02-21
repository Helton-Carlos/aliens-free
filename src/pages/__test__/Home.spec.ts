import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";

describe("Page Home ", () => {
  test("Render Home", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/Home",
          component: Home,
          meta: {
            navBar: true,
            title: "Home",
          },
        },
      ],
    });

    const wrapper = render(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeDefined();
  });
});
