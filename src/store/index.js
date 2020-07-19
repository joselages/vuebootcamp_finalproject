import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: [
      {
        type: "debit",
        description: "Jantar",
        amount: 1500,
      },
      {
        type: "credit",
        description: "Almoço",
        amount: 1000,
      },
    ],
  },
  getters: {
    getTransactions: function(state) {
      return state.fields;
    },
  },
  mutations: {
    //accepts mutations
    getFields: function(state, payload) {
      //so it does not clone the first
      state.fields.push(JSON.parse(JSON.stringify(payload)));
      console.log(state.fields);
    },
  },
  actions: {
    getFields: function(context, payload) {
      context.commit("getFields", payload);
    },
  },
  modules: {},
});
