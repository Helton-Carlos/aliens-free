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
 
     removeUserStorage() {
       return localStorage.removeItem('user');
     }
  },
})
