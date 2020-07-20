<template>
  <div class="balance">
    <h2>
      Account Balance
      <strong>{{formatMoney(getBalance)}}</strong>
    </h2>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];

export default {
  name: "TotalBar",
  computed: {
    ...mapGetters(["getBalance"])
  }
};
</script>