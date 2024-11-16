import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import Cover from "@/pages/Cover/Cover.vue";

describe("Page Cover ", () => {
  test("Render Cover", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/Cover",
          component: Cover
        },
      ],
    });

    const wrapper = render(Cover, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeDefined();
  });
});
