import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/analyses/:slug",
    name: "analyses",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Analyses.vue")
  },
  {
    path: "/blog/:slug",
    name: "blogPosts",
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: "notFound",
    props: false,
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/NotFound")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
