import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Components from "@/views/Components";
import Select from "@/components/Select";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
  // {
  //   path: '/components',
  //   name: 'Components',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
