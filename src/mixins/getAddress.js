export default {
  methods: {
    getAddress: function(data) {
      var lat = data.coords.latitude;
      var lon = data.coords.longitude;
      var apikey = "bc1943561fb626f3a5b51febb8ec7117";
      var self = this;
      self.loadingState = true;

      fetch(
        "http://api.positionstack.com/v1/reverse?access_key=" +
          apikey +
          "&query=" +
          lat +
          "," +
          lon
      )
        .then((response) => response.json())
        .then(function(data) {
          self.input.location = data.data[0].label;
          self.loadingState = false;
        });
    },
  },
};
