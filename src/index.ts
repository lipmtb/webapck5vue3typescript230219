import { createApp } from 'vue';
import router from "./router";
import store from "./store"
import "./style/main.less";

import App from './App.vue';
import appVconsole from './vconsole';

createApp(App).use(router).use(store).use(appVconsole).mount("#root");