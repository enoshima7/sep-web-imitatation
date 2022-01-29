import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import SvgIcon from "./components/SvgIcon.vue";
import "./icons";
import "./index.css";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.component("SvgIcon", SvgIcon);
app.use(router);
app.mount("#app");
