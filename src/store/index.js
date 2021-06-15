import Vue from "vue";
import Vuex from "vuex";

import transactions from "./modules/transactions";
import modal from "./modules/modal";
import localStorage from "./modules/localStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    transactions,
    modal,
    localStorage
  },
});
