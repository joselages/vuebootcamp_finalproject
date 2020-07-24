<template>
  <div class="w-full flex flex-col items-center" @keyup.enter="addTransaction">
    <h1>Add transaction</h1>
    <div class="toggle-switch">
      <input v-model="input.type" type="radio" id="debit" value="debit" name="transaction_type" />
      <label for="debit">Debit</label>

      <input v-model="input.type" type="radio" id="credit" value="credit" name="transaction_type" />
      <label for="credit">Credit</label>
    </div>

    <div class="input-field">
      <label for="description">Description</label>
      <input
        @keydown="error.description = ''"
        v-model="input.description"
        type="text"
        id="description"
        name="transaction_description"
        placeholder="Enter your description"
      />
    </div>
    <transition name="fadein">
      <div
        v-if="error.description"
        class="bg-red-600 py-1 px-2 mb-2 txt-2 text-white text-xs rounded"
      >{{error.description}}</div>
    </transition>

    <div class="input-field">
      <label for="amount">Amount</label>
      <div>
        <span class="currency">$</span>
        <input
          @keydown="error.amount = ''"
          v-model="input.amount"
          type="text"
          id="amount"
          name="transaction_amount"
        />
      </div>
    </div>
    <transition name="fadein">
      <div
        class="bg-red-600 py-1 px-2 mb-2 txt-2 text-white text-xs rounded"
        v-if="error.amount"
      >{{error.amount}}</div>
    </transition>

    <div class="mt-4">
      <button
        class="border-2 border-purple-600 px-16 py-2 rounded"
        @click.prevent="addTransaction"
      >Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: {
        type: "debit",
        description: "",
        amount: "",
        date: null,
        hour: null,
      },
      error: {
        description: "",
        amount: "",
      },
    };
  },
  methods: {
    addTransaction: function () {
      if (this.validateForm() > 0) {
        //stops
        return;
      } else {
        this.getTime();
        //send action to store
        this.input.amount *= 100;
        this.$store.dispatch("getFields", this.input);
        //go to transactions page
        this.$router.push({ path: "/" });
      }
    },
    validateForm: function () {
      this.error.description = "";
      this.error.amount = "";
      var errorsNum = 0;

      if (!this.input.description) {
        this.error.description = "Please enter a description";
        errorsNum++;
      }
      if (!this.input.amount) {
        this.error.amount = "Please enter an  amount";
        errorsNum++;
      }

      return errorsNum;
    },
    getTime: function () {
      var today = new Date();
      var hour =
        today.getHours() < 10 ? "0" + today.getHours() : today.getHours();

      var minutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
      var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

      var month =
        today.getMonth() + 1 < 10
          ? "0" + (today.getMonth() + 1)
          : today.getDate() + 1;
      var year = today.getFullYear();

      var fullTime = hour + ":" + minutes;
      var fullDate = day + "/" + month + "/" + year;

      this.input.date = fullDate;
      this.input.hour = fullTime;
    },
  },
};
</script>

<style>
.fadein-enter,
.fadein-leave-to {
  opacity: 0;
  transform: translate3d(-10px, 0, 0);
}

.fadein-enter-active,
.fadein-leave-active {
  transition: all 0.5s ease;
}
</style>