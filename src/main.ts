import { createApp } from 'vue';
import './style.css';
import 'animate.css';
import App from './App.vue';
import Router from './routes/index';
import VueApexCharts from "vue3-apexcharts";
import { globalCookiesConfig } from "vue3-cookies";
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app = createApp(App);

globalCookiesConfig({
  expireTimes: "1d",
  path: "/cover",
  domain: "",
  secure: true,
  sameSite: "None",
});

app.use(Router);
app.use(LoadingPlugin);
app.use(VueApexCharts);
app.mount('#app');
