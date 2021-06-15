export default {
  state: {
    lsString: "",
  },
  getters: {
    getLSString: function(state) {
      return state.lsString;
    },
  },
  mutations: {
    jsonToString: function(state, data) {
        state.lsString = JSON.stringify(data);
        console.log(state.lsString)
    },

    //   closeModal: function(state) {
    //     //clean up the promise resolve
    //     state.modalResolve = null;
    //     state.modal = false;
    //   },
    //   openModal: function(state, payload) {
    //     //this is a function
    //     state.modalResolve = payload.resolve;
    //     state.modal = true;
    //   },
    //   resolveModal: function(state) {
    //     //check if modal exist
    //     if (state.modalResolve) {
    //       //run the function in the .then() on Index.vue
    //       state.modalResolve();
    //     }
    //   },
  },
  actions: {
    // jsonToString: function(context){
    //     context.commit("jsonToString", data);
    // }
    //   closeModal: function(context) {
    //     context.commit("closeModal");
    //   },
    //   openModal: function(context) {
    //     return new Promise(function(resolve) {
    //       //pass the resolve as a payload, which is a function
    //       context.commit("openModal", { resolve });
    //     });
    //   },
    //   resolveModal: function(context) {
    //     context.commit("resolveModal");
    //     context.commit("closeModal");
    //   },
  },
};
