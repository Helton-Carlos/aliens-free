import { defineStore } from "pinia";

export const userLocalStorageStore = defineStore('users', {
  state: () => ({
    user: [],
  }),
  
  actions: {
    getUserStorage() {
      let user =  localStorage.getItem('user');

      if(user) return JSON.parse(user);
     },

     userStatus() {
      const { name, email } = this.getUserStorage();

      const user = {
        name, 
        email,
        money: "200.00",
        profession: "Front-end",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      }

      return user;
     },
 
     removeUserStorage() {
       return localStorage.removeItem('user');
     }
  },
})
