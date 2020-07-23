<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>

    <template v-if="getTransactions.length > 0">
      <div v-for="(transaction, idx) in getTransactions" :key="transaction.id" class="transaction">
        <div class="flex">
          <div
            :class="transaction.type === 'credit' ? 'bg-green-400' : 'bg-red-400'"
            class="w-6 h-6 rounded-full flex justify-center items-center text-white font-bold text-xl"
          >{{transaction.type === "credit" ? "+" : "-"}}</div>
          <div
            :title="transaction.description"
            class="ml-4 w-40 truncated_txt"
          >{{transaction.description}}</div>
        </div>
        <div class="flex">
          <div class="mr-5">{{ formatMoney(transaction.amount) }}</div>
          <div>
            <button class="font-bold" @click.prevent="removeTransaction(idx)">X</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>Não tem transações</template>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];

export default {
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["getTransactions"]),
  },
  methods: {
    removeTransaction: function (id) {
      var self = this;
      //this returns a promise
      this.$store.dispatch("openModal").then(function () {
        //this whill become the function that the resolve passes
        self.$store.dispatch("deleteTransaction", id);
      });

      //this.$store.commit("deleteTransaction", id);
      //console.log(id);
    },
  },
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