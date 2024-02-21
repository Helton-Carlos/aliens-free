import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import NotificationView from "./NotificationView.vue";

describe("Page NotificationView ", () => {
  test("Render NotificationView", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/notification",
          component: NotificationView,
          meta: {
            NavBar: true,
          },
        },
      ],
    });

    const wrapper = render(NotificationView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeDefined();
  });
});
