import { createApp } from "vue";

import App from "./App.vue";

import router from "@/router/index";

import { createPinia } from "pinia";

import ToastService from "primevue/toastservice";

import PrimeVue from 'primevue/config';

import { globalComponents, validator } from "./plugins";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "./assets/styles/main.scss";

const pinia = createPinia();

export const app = createApp(App);
app
  .use(pinia)
  .use(router)
  .use(PrimeVue)
  .use(globalComponents)
  .use(ToastService)
  .use(validator)
  .mount("#app");
