export default {
  methods: {
    formatMoney: function(amount) {
      var sign = "€ ";
      var money = amount / 100;

      if (amount < 0) {
        sign = "-€ ";
        //so it becames positive and the - sign dissapear
        money *= -1;
      }
      return sign + money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
