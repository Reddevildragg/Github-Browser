import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

import router from "./router";

const userRepos = ["Reddevildragg"];
const orgRepos = ["Greener-Games"];

const app = createApp(App);

app.config.globalProperties.$UserRepos = userRepos;
app.config.globalProperties.$OrgRepos = orgRepos;

app.use(store);
app.use(router);

app.mount("#app");
