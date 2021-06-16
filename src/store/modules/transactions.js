export default {
  state: {
    fields: [],
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
    getTransactionsFromLS(state, payload){
      state.fields=payload;
    },
    //accepts mutations
    getFields: function(state, payload) {
      //so it does not clone the first
      state.fields.unshift(JSON.parse(JSON.stringify(payload)));
    },
    deleteTransaction: function(state, index) {
      state.fields.splice(index, 1);
    },
  },
  actions: {
    getFields: function(context, payload) {
      context.commit("getFields", payload);
    },
    deleteTransaction: function(context, index) {
      context.commit("deleteTransaction", index);
    },
  },
};
