import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";

describe("Page Home ", () => {
  test("Render Home", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          component: Home,
          meta: {
            NavBar: true,
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
