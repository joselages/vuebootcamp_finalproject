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
    modal: false,
    modalResolve: null,
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
    modalState: function(state) {
      return state.modal;
    },
  },
  mutations: {
    //accepts mutations
    getFields: function(state, payload) {
      //so it does not clone the first
      state.fields.unshift(JSON.parse(JSON.stringify(payload)));
    },
    deleteTransaction: function(state, index) {
      state.fields.splice(index, 1);
    },
    closeModal: function(state) {
      //clean up the promise resolve
      state.modalResolve = null;
      state.modal = false;
    },
    openModal: function(state, payload) {
      //this is a function
      state.modalResolve = payload.resolve;
      state.modal = true;
    },
    resolveModal: function(state) {
      //check if modal exist
      if (state.modalResolve) {
        //run the function in the .then() on Index.vue
        state.modalResolve();
      }
    },
  },
  actions: {
    getFields: function(context, payload) {
      context.commit("getFields", payload);
    },
    deleteTransaction: function(context, index) {
      context.commit("deleteTransaction", index);
    },
    closeModal: function(context) {
      context.commit("closeModal");
    },

    openModal: function(context) {
      return new Promise(function(resolve) {
        //pass the resolve as a payload, which is a function
        context.commit("openModal", { resolve });
      });
    },
    resolveModal: function(context) {
      context.commit("resolveModal");
      context.commit("closeModal");
    },
  },
  modules: {},
});
