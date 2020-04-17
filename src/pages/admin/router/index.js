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
        meta: { title: "首页", icon: "house" }
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/list",
    name: "ComponentDemo",
    meta: {
      title: "文章",
      icon: "component"
    },
    children: [
      {
        path: "list",
        name: "ArticleList",
        component: () => import("../views/articles"),
        meta: {
          title: "文章列表",
          icon: "document",
          activeMenu: "/article/list"
        }
      },
      {
        path: "add",
        name: "AddArticle",
        component: () => import("../views/articles/add"),
        meta: {
          title: "新增文章",
          icon: "document",
          activeMenu: "/article/list"
        }
      },
      {
        path: "edit/:id(\\d+)",
        name: "EditArticle",
        component: () => import("../views/articles/edit"),
        meta: {
          title: "编辑文章",
          icon: "document",
          activeMenu: "/article/list",
          noCache: true
        },
        hidden: true
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
