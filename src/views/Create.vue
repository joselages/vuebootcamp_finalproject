<template>
  <div class="w-full flex flex-col items-center">
    <h1>Add transaction</h1>

    <div class="toggle-switch">
      <input type="radio" id="debit" name="transaction_type" checked />
      <label for="debit">Debit</label>

      <input type="radio" id="credit" name="transaction_type" />
      <label for="credit">Credit</label>
    </div>

    <div class="input-field">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        name="transaction_description"
        placeholder="Enter your description"
      />
    </div>

    <div class="input-field">
      <label for="amount">Amount</label>
      <div>
        <span class="currency">$</span>
        <input type="text" id="amount" name="transaction_amount" />
      </div>
    </div>

    <div>
      <button>Add</button>
    </div>
  </div>
</template>

<script>
</script>

<style></style>