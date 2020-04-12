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
        component: () => import("../views/dashboard")
      }
    ]
  },
  {
    path: "/category",
    component: Layout,
    redirect: "/category",
    children: [
      {
        path: "category",
        name: "Category",
        component: () => import("../views/category.vue")
      },
      {
        path: "article",
        name: "Article",
        component: () => import("../views/article.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
