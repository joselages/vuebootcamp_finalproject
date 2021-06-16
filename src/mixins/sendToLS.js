export default {
  methods: {
    sendToLS: function(data) {
      localStorage.setItem("transactions", data);
    },
    getFromLS: function() {
      let ls = localStorage.getItem("transactions");
      
      if (ls === null || ls.length < 1) return;

      this.$store.commit("stringToJSON", ls);
      this.$store.commit(
        "getTransactionsFromLS",
        this.$store.getters.getLSString
      );
    },


  },
};
