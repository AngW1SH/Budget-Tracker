import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { Home } from "../pages/home";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: Home }];

const router = createRouter({ routes, history: createWebHistory() });

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
