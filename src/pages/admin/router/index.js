import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/pages/admin/layout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/login/login.vue"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/pages/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/dashboard"),
        meta: { title: "Dashboard", icon: "house" }
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Article",
        component: () => import("../views/article"),
        meta: { title: "Form", icon: "document" }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
