<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>

    <div v-for="transaction in getTransactions" :key="transaction.id" class="transaction">
      <div class="flex">
        <div class="w-24">{{transaction.type.toUpperCase()}}</div>
        <div :title="transaction.description" class="w-40 truncated_txt">{{transaction.description}}</div>
      </div>
      <div>{{ formatMoney(transaction.amount) }}</div>
    </div>
  </div>
</template>

<script>
import formatMoney from "../mixins/formatMoney";
const mapGetters = require("vuex")["mapGetters"];

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["getTransactions"])
  },
  mixins: [formatMoney]
};
</script>

<style>
.truncated_txt {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.transaction {
  display: flex;
  justify-content: space-between;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>