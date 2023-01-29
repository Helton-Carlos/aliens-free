import { defineStore } from "pinia";

interface State {
  users: UserInfo | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      users: {
        user: "José Brito",
        money: "200.00",
        profession: "Front-end",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    };
  },
});

interface UserInfo {
  user: string;
  money: string;
  profession: string;
  image: string;
}
