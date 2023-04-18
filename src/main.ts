import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
// main.ts
// import { createApp } from 'vue';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import App from './App.vue';

app.use(ElementPlus);
// app.mount('#app');
app.use(store).use(router).mount("#app");