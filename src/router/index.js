import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/overview.vue";
import Product from "../views/product.vue";
import Order from "../views/orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children:[{
      path: "overview",
      name: "overview",
      component: Overview
    },
    {
      path: "product",
      name: "product",
      component: Product
    },
    {
      path: "orders",
      name: "orders",
      component: Order
    }
  ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
