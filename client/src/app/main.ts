import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { Home } from "@/pages/home";
import { createRouter, createWebHistory } from "vue-router";
import { LogInPage } from "@/pages/signin";
import { ResetPasswordPage } from "@/pages/resetpassword";

export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: LogInPage },
  { path: "/resetpassword/:token", component: ResetPasswordPage },
];

const router = createRouter({ routes, history: createWebHistory() });

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
