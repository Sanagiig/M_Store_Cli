import {createSSRApp} from "vue";
import {initRequestInterceptor} from "./utils/request";
import App from "./App.vue";
import pinia from "./stores";

initRequestInterceptor();
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  return {
    app,
  };
}
