export default {
  methods: {
    sendToLS: function(data) {
      localStorage.setItem("teste", data);
    },
  },
};
