<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>

    <template v-if="getTransactions.length > 0">
      <div v-for="(transaction, idx) in getTransactions" :key="transaction.id" class="transaction">
        <div class="relative">
          <svg
            @click="infoHover(idx)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="cursor-pointer"
          >
            <path
              class="heroicon-ui opacity-75"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <transition name="popin">
            <more-info v-if="showInfo === idx" :date="transaction.date" :hour="transaction.hour" />
          </transition>
        </div>
        <div class="flex">
          <div
            :title="transaction.type"
            :class="transaction.type === 'credit' ? 'bg-green-400' : 'bg-red-400'"
            class="w-6 h-6 rounded-full flex justify-center items-center text-white font-bold text-xl"
          >{{transaction.type === "credit" ? "+" : "-"}}</div>
          <div class="ml-4 w-40">
            <h3 :title="transaction.description" class="truncated_txt">{{transaction.description}}</h3>
            <a
              v-if="transaction.location"
              class="text-purple-600 underline"
              target="_blank"
              v-bind:href="'http://maps.google.com/?q=' + transaction.location"
            >Ver no mapa</a>
          </div>
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
import moreInfo from "../components/moreInfo";
const mapGetters = require("vuex")["mapGetters"];

export default {
  data: function () {
    return {
      showInfo: null,
    };
  },
  components: {
    moreInfo,
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
    infoHover: function (id) {
      if (id === this.showInfo) {
        this.showInfo = null;
      } else {
        this.showInfo = id;
      }
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

.popin-enter,
.popin-leave-to {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}

.popin-enter-active,
.popin-leave-active {
  transition: all 0.65s cubic-bezier(0.34, 2, 0.64, 1);
}
</style>