export default {
  methods: {
    getAddress: function(data) {
      console.log(data);

      let lat = data.coords.latitude;
      let lon = data.coords.longitude;
      //let apikey = "";
      let self = this;
      self.loadingState = true;

      // fetch(
      //   "http://api.positionstack.com/v1/reverse?access_key=" +
      //   process.env.VUE_APP_API_KEY +
      //     "&query=" +
      //     lat +
      //     "," +
      //     lon
      // )
      //   .then((response) => response.json())
      //   .then(function(data) {
      //     self.input.location = data.data[0].label;
      //     self.loadingState = false;
      //   });

      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1IjoiamxhZ2VzIiwiYSI6ImNrcWlmNWZmZjBncmMyb3NiM3F6OTg1a2kifQ.siZawaVTuhLZ9BQjkcJ-eg`
      )
        .then((response) => response.json())
        .then(function(data) {
          console.log(data)
          self.input.location = data.features[0].place_name;
          self.loadingState = false;
        });
    },
  },
};
