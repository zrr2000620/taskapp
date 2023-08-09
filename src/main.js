import { createApp } from "vue";
import { setupRouter } from "./routes/router";
import { setupPinia } from "./stores";
import App from "./App.vue";
import "./style.css";
// Toast
import "vant/es/toast/style";
// Dialog
import "vant/es/dialog/style";
// Notify
import "vant/es/notify/style";
// ImagePreview
import "vant/es/image-preview/style";

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupPinia(app);
  app.mount("#app");
}

bootstrap();
