import { createApp } from "vue";
import "../../../../../../node_modules/ui-searchbooster/dist/style.css";
import "./style.css";

import { ContrustBtn } from "@ntc-etalon/ui-contrust";

import App from "./App.vue";

export const app = createApp(App);

app.component("ContrustBtn", ContrustBtn);

app.mount("#app");
