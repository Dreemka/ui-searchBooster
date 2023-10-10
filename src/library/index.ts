import "@/styles/main.scss";
import type { App } from "vue";

import SearchBoosterButton from "./searchBoosterButton/SearchBoosterButton.vue";

const useSearchBoosterUi = {
  install: function (app: App) {
    app.component("SearchBoosterButton", SearchBoosterButton);
  },
};

export { SearchBoosterButton };
export default useSearchBoosterUi;
