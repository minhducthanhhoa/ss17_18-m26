import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

const app = createApp(App);
app.use(router);
// gán giao diện vào app
app.mount("#app");