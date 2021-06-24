<template>
  <div class="flex flex-col items-center h-full overflow-y-auto">
    <h1 class="my-5">Transações</h1>

    <template v-if="getTransactions.length">
      <div
        class="
          border
          flex flex-col
          items-center
          mb-6
          w-11/12
          md:w-9/12
          sm:1/2
          lg:w-2/6
          rounded
          shadow-md
        "
      >
        <div
          v-for="(transaction, idx) in getTransactions"
          :key="transaction.id"
          class="transaction relative p-2 sm:p-auto"
        >
          <span :title="transaction.type === 'credit' ? 'Ganhei' : 'Gastei'">{{
            transaction.type === "credit" ? "🤑" : "💸"
          }}</span>

          <!-- <div class="relative" style="height: min-content">
            <svg
              @click="infoHover(idx)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="cursor-pointer"
            >
              <path
                class="opacity-75"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <transition name="popin">
              <more-info
                class="
                  absolute
                  bubble_position
                  z-50
                  bg-gray-200
                  p-2
                  rounded
                  text-sm
                  border-b-4 border-purple-600
                  shadow
                "
                v-if="showInfo === idx"
                :date="transaction.date"
                :hour="transaction.hour"
              />
            </transition>
          </div> -->
          <!-- <div
              :title="transaction.type === 'credit' ? 'Ganhei' : 'Gastei'"
              :class="
                transaction.type === 'credit' ? 'bg-green-400' : 'bg-red-400'
              "
              class="
                w-6
                h-6
                rounded-full
                flex
                justify-center
                items-center
                text-white
                font-bold
                text-xl
                select-none
              "
            >
              {{ transaction.type === "credit" ? "+" : "-" }}
            </div> -->
          <div class="ml-4 w-40 flex flex-col truncated_txt">
            <h3 :title="transaction.description" class="truncated_txt">
              {{ transaction.description }}
            </h3>
            <small>
              <span v-if="transaction.date">{{ transaction.date }}</span
              ><wbr />
              <span v-if="transaction.hour">{{
                " / " + transaction.hour
              }}</span>
            </small>
            <a
              v-if="transaction.location"
              class="text-purple-600 underline text-sm"
              target="_blank"
              rel="noreferrer"
              v-bind:href="'http://maps.google.com/?q=' + transaction.location"
              >Ver no mapa</a
            >
          </div>
          <div
            class="mr-5 text-xl font-semibold grid place-items-center"
            :style="{
              color: transaction.type === 'credit' ? 'rgb(0 206 47)' : '',
            }"
            :data-idx="idx"
          >
            <p>
              {{ transaction.type === "credit" ? "+" : "-" }}
              {{ formatMoney(transaction.amount) }}
            </p>
          </div>

          <button
            class="font-bold text-2xl leading-none opacity-25"
            @click.prevent="removeTransaction(idx)"
          >
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="empty_state">
        <span class="empty_emoji">🏜️</span>
        Não tem transações...
      </div>
    </template>
  </div>
</template>

<script>
//import moreInfo from "../components/moreInfo";
const mapGetters = require("vuex")["mapGetters"];

export default {
  data: function () {
    return {
      showInfo: null,
    };
  },
  components: {
    //moreInfo,
  },
  computed: {
    ...mapGetters(["getTransactions"]),
  },
  methods: {
    removeTransaction: function (id) {
      var self = this;
      //this returns a promise
      this.$store.dispatch("openModal").then(function () {
        //this will become the function that the resolve passes
        self.$store.dispatch("deleteTransaction", id);
        self.$store.commit("jsonToString", self.$store.getters.getTransactions);
        self.sendToLS(self.$store.getters.getLSString);
      });
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
html,
body {
  height: 100%;
}

#app {
  height: 100%;
  display: grid;
  grid-template-rows: 4rem 3rem 1fr;
}

.truncated_txt {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 400px) {
  .truncated_txt {
    width: 100px;
  }
}

.transaction {
  display: grid;
  grid-template-columns: 25px auto auto 25px;
  width: 100%;
}

.transaction:not(:last-of-type) {
  border-bottom: 1px solid #e2e8f0;
}

.popin-enter,
.popin-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -5px, 0);
}

.popin-enter-active,
.popin-leave-active {
  transition: all 0.65s cubic-bezier(0.34, 2, 0.64, 1);
}

.empty_state {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  pointer-events: none;
  user-select: none;
}

.empty_emoji {
  opacity: 0.25;
  font-size: 10rem;
  margin-bottom: 0.5rem;
}
</style>