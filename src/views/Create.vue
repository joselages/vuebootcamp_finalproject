<template>
  <div class="w-full flex flex-col items-center" @keyup.enter="addTransaction">
    <h1>Add transaction</h1>
    <form class="border p-4 flex flex-col items-center mb-6">
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
          <span class="currency">€</span>
          <input
            @keydown="error.amount = ''"
            v-model="input.amount"
            type="tel"
            format="^[0-9]+$"
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

      <div class="input-field">
        <label for="hours">Horas</label>
        <input v-model="input.hour" type="time" id="hours" name="transaction_hour" />
      </div>

      <div class="input-field">
        <label for="date">Data</label>
        <input v-model="input.date" type="date" id="date" name="transaction_date" />
      </div>

      <div class="input-field">
        <label for="location">Local</label>
        <input
          v-model="input.location"
          type="text"
          id="location"
          name="transaction_location"
          :disabled="input.currentLocation?true:false"
        />
      </div>

      <div class="ml-auto">
        <label for="clocation">
          <input
            @click="getLocation"
            id="clocation"
            type="checkbox"
            v-model="input.currentLocation"
          />
          Add current location
        </label>
      </div>

      <div class="mt-4">
        <button
          :disabled="loadingState?true:false"
          class="border-2 border-purple-600 w-48 flex justify-center py-2 rounded"
          @click.prevent="addTransaction"
        >
          <span v-if="!loadingState">Add</span>
          <img v-else class="w-6" src="../assets/loading.gif" />
        </button>
      </div>
    </form>
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
        location: "",
        currentLocation: false,
      },
      loadingState: false,
      error: {
        description: "",
        amount: "",
      },
    };
  },
  methods: {
    getLocation: function () {
      this.input.location = "";
      if (!this.input.currentLocation) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getAddress);
        } else {
          console.log("error");
        }
      }
    },
    addTransaction: function () {
      if (this.validateForm() > 0) {
        //stops
        return;
      } else {
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
      if (!this.input.amount || !/^[0-9]*$/.test(this.input.amount)) {
        this.error.amount = "Please enter an valid amount";
        errorsNum++;
      }

      return errorsNum;
    },
  },
  mounted() {
    this.currentTime();
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