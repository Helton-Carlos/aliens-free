import { createApp } from 'vue';
import './style.css';
import 'animate.css';

import App from './App.vue';
import Router from './routes/index';
import VueApexCharts from "vue3-apexcharts";
import { makeServer } from "./server/index";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const app = createApp(App)

app.use(Router);
app.use(LoadingPlugin);
app.use(VueApexCharts);
app.mount('#app');
