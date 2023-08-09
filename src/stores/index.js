import { createPinia } from "pinia";

const pinia = createPinia();

export function setupPinia(app) {
  return app.use(pinia);
}
