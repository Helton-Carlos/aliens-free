import { createApp } from 'vue'
import './style.css'
import 'animate.css';

import App from './App.vue'
import Router from './routes/index'

const app = createApp(App)

app.use(Router)
app.mount('#app')
