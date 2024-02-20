import { createApp } from 'vue';
import { globalCookiesConfig } from "vue3-cookies";
import { makeServer } from "@/server/index";
import { createPinia } from 'pinia';
import Router from './routes/index';
import VueApexCharts from "vue3-apexcharts";
import './style.css';
import 'animate.css';
import App from './App.vue';

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const Pinia = createPinia();
const app = createApp(App);

globalCookiesConfig({
  expireTimes: "1d",
  path: "/cover",
  domain: "",
  secure: true,
  sameSite: "None",
});

app.use(Router);
app.use(VueApexCharts);
app.use(Pinia);
app.mount('#app');
