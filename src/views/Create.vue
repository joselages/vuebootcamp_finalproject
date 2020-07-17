<template>
  <div class="w-full flex flex-col items-center">
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
    <div v-if="error.description">{{error.description}}</div>

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
    <div v-if="error.amount">{{error.amount}}</div>

    <div class="mt-4">
      <button class="border-2 border-purple-600 px-16 py-2" @click.prevent="addTransaction">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      input: {
        type: "debit",
        description: "",
        amount: ""
      },
      error: {
        description: "",
        amount: ""
      }
    };
  },
  methods: {
    addTransaction: function() {
      if (this.validateForm() > 0) {
        //stops
        return;
      } else {
        //send action to store
        this.$store.dispatch("getFields", this.input);
        //go to transactions page
        this.$router.push({ path: "/transactions" });
      }
    },
    validateForm: function() {
      this.error.description = "";
      this.error.amount = "";
      var errorsNum = 0;

      if (!this.input.description) {
        this.error.description = "Please enter a transaction description";
        errorsNum++;
      }
      if (!this.input.amount) {
        this.error.amount = "Please enter a transaction  amount";
        errorsNum++;
      }

      return errorsNum;
    }
  }
};
</script>

<style></style>