import { createApp } from 'vue';
import './style.css';
import 'animate.css';

import App from './App.vue';
import Router from './routes/index';
import VueApexCharts from "vue3-apexcharts";
import { makeServer } from "./server/index";

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const app = createApp(App)

app.use(Router)
app.use(VueApexCharts)
app.mount('#app')
