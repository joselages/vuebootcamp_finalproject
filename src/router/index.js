import Vue from "vue";
import VueRouter from "vue-router";

import Transactions from "../views/Transactions";
import Create from "../views/Create";

Vue.use(VueRouter);

const routes = [
  { path: "/transactions", component: Transactions },
  { path: "/transactions/create", component: Create },
];

const router = new VueRouter({
  routes,
});

export default router;
