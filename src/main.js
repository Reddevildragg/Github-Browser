import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from "./router";
import pinia from "@/store";

const app = createApp(App);

app.use(pinia)
app.use(router);
app.config.devTools = true;
app.mount("#app");
