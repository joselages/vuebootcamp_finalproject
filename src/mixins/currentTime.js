export default {
  methods: {
    currentTime: function() {
      var today = new Date();
      var hour =
        today.getHours() < 10 ? "0" + today.getHours() : today.getHours();

      var minutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

      this.input.hour = hour + ":" + minutes;

      var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

      var month =
        today.getMonth() + 1 < 10
          ? "0" + (today.getMonth() + 1)
          : today.getDate() + 1;
      var year = today.getFullYear();

      this.input.date = year + "-" + month + "-" + day;
    },
  },
};
