export default {
  state: {
    modal: false,
    modalResolve: null,
  },
  getters: {
    modalState: function(state) {
      return state.modal;
    },
  },
  mutations: {
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
};
