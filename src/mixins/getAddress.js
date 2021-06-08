export default {
  methods: {
    getAddress: function(data) {
      let lat = data.coords.latitude;
      let lon = data.coords.longitude;
      //let apikey = "";
      let self = this;
      self.loadingState = true;

      fetch(
        "http://api.positionstack.com/v1/reverse?access_key=" +
        process.env.VUE_APP_API_KEY +
          "&query=" +
          lat +
          "," +
          lon
      )
        .then((response) => response.json())
        .then(function(data) {
          console.log(data)
          self.input.location = data.data[0].label;
          self.loadingState = false;
        });
    },
  },
};
