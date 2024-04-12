import { render } from "@testing-library/vue";
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach } from "vitest";
import { userLocalStorageStore } from "@/store/user";
import { createRouter, createWebHistory } from "vue-router";
import Nav from "./Nav.vue";
import Home from "../../pages/Home/Home.vue";

describe("Nav component", () => {
  beforeEach(()=>{
    const user = {
      name: 'bob',
      email: 'bob@gmail.com'
    };
    
    localStorage.setItem('user',JSON.stringify(user));

    setActivePinia(createPinia());
  });  

  test("Validation navbar", () => {
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

  test("Render Nav", () => {
    const { userStatus } = userLocalStorageStore();
    
    userStatus();

    const component = render(Nav);
    expect(component).toBeDefined();
  });

  test("Search user", () => {
    const { userStatus } = userLocalStorageStore();

    const {name, email} = userStatus();

    expect(name).toBe('bob');
    expect(email).toBe('bob@gmail.com');
  });
});
