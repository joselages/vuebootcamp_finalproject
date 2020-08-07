export default {
  //turns US date (yyyy-mm-dd) to PT date (dd/mm/yyy)
  methods: {
    formatDate: function(date) {
      return date
        .split("-")
        .reverse()
        .join("/");
    },
  },
};
