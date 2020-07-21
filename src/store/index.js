import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: [
      {
        type: "debit",
        description: "jantar",
        amount: 1000,
      },
      {
        type: "credit",
        description: "olo",
        amount: 2000,
      },
    ],
  },
  getters: {
    getTransactions: function(state) {
      return state.fields;
    },

    getBalance: function(state) {
      var total = 0;

      if (state.fields.length < 1) {
        return total;
      } else {
        state.fields.forEach(function(value) {
          if (value.type === "credit") {
            total += value.amount;
          } else {
            total -= value.amount;
          }
        });
        return total;
      }
    },
  },
  mutations: {
    //accepts mutations
    getFields: function(state, payload) {
      //so it does not clone the first
      state.fields.push(JSON.parse(JSON.stringify(payload)));
    },
    deleteTransaction: function(state, payload) {
      state.fields.splice(payload, 1);
    },
  },
  actions: {
    getFields: function(context, payload) {
      context.commit("getFields", payload);
    },
  },
  modules: {},
});
