import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/signIn",
      component: () => import("@/views/auth/sign-in/index.vue"),
    },
  ],
  history: createWebHashHistory(),
});

export function setupRouter(app) {
  return app.use(router);
}

export default router;
