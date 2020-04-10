import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/category.vue"),
  },
  {
    path: "/article",
    name: "Article",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/article.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
