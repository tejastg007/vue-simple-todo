import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import BaseButton from "./UI/BaseButton.vue";
const app = createApp(App);
app.component("BaseButton", BaseButton);
app.use(store);
app.mount("#app");
