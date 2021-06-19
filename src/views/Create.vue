<template>
  <div class="w-full flex flex-col items-center" @keyup.enter="addTransaction">
    <h1 class="my-5">Adicionar transação</h1>
    <form
      class="
        border
        p-4
        flex flex-col
        items-center
        mb-6
        w-11/12
        md:w-9/12
        sm:1/2
        lg:w-2/6
        rounded
      "
    >
      <div class="toggle-switch">
        <input
          v-model="input.type"
          type="radio"
          id="debit"
          value="debit"
          name="transaction_type"
        />
        <label for="debit"><span class="checkbox-emoji">💸</span> Gastei</label>

        <input
          v-model="input.type"
          type="radio"
          id="credit"
          value="credit"
          name="transaction_type"
        />
        <label for="credit"
          ><span class="checkbox-emoji">🤑</span> Ganhei</label
        >
      </div>

      <div class="input-field relative">
        <label for="description">Descrição</label>
        <input
          @keydown="error.description = ''"
          v-model="input.description"
          type="text"
          id="description"
          name="transaction_description"
          placeholder="Ex: Jantar de aniversário"
          :class="error.description ? '-error' : ''"
        />
      </div>

      <div class="h-8">
        <transition name="fadein">
          <div
            v-if="error.description"
            class="bg-red-600 py-1 px-2 mb-2 txt-2 text-white text-xs rounded"
          >
            {{ error.description }}
          </div>
        </transition>
      </div>

      <div class="input-field">
        <label for="amount">Quantia</label>
        <div
          class="flex border rounded px-3 py-1"
          :class="error.amount ? '-error' : ''"
        >
          <span class="currency">€</span>
          <input
            @keydown="error.amount = ''"
            v-model="input.amount"
            type="tel"
            format="^[0-9]+$"
            id="amount"
            name="transaction_amount"
            class="w-full -no-border"
          />
        </div>
      </div>
      <div class="h-8">
        <transition name="fadein">
          <div
            class="bg-red-600 py-1 px-2 mb-2 txt-2 text-white text-xs rounded"
            v-if="error.amount"
          >
            {{ error.amount }}
          </div>
        </transition>
      </div>

      <div class="flex w-full mb-3">
        <div class="input-field -half-width">
          <label for="hours">Horas</label>
          <input
            v-model="input.hour"
            type="time"
            id="hours"
            name="transaction_hour"
          />
        </div>

        <div class="input-field -half-width">
          <label for="date">Data</label>
          <input
            v-model="input.date"
            type="date"
            id="date"
            name="transaction_date"
          />
        </div>
      </div>

      <div class="input-field">
        <label for="location">Local</label>
        <input
          v-model="input.location"
          type="text"
          id="location"
          name="transaction_location"
          :disabled="input.currentLocation ? true : false"
          placeholder="Ex: Estoril"
        />
      </div>

      <div class="mr-auto">
        <label for="clocation" class="cursor-pointer text-sm flex">
          <input
            @click="getLocation"
            id="clocation"
            type="checkbox"
            v-model="input.currentLocation"
            class="cursor-pointer input-checkbox"
          />
          Adicionar localizaçao atual
        </label>
      </div>

      <div class="mt-4 ml-auto">
        <button
          :disabled="loadingState ? true : false"
          class="
            input-submit
          "
          @click.prevent="addTransaction"
        >
          <span v-if="!loadingState">Adicionar</span>
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

        //add to LS string
        this.$store.commit("jsonToString", this.$store.getters.getTransactions);
        this.sendToLS(this.$store.getters.getLSString);
      }
    },
    validateForm: function () {
      this.error.description = "";
      this.error.amount = "";
      var errorsNum = 0;

      if (!this.input.description) {
        this.error.description = "Por favor adicione uma descrição";
        errorsNum++;
      }
      if (!this.input.amount || !/^[0-9]*$/.test(this.input.amount)) {
        this.error.amount = "Por favor adicione uma quantia válida";
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

.input-submit {
  width: 12rem;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  border-radius: 0.25rem;
  background-color: #805ad5;
  box-shadow: 0 0 8px -1px rgba(128, 90, 213, 0.5),
    0 0 16px -1px rgba(128, 90, 213, 0.5),
    0 0 32px -1px rgba(128, 90, 213, 0.5);
    transition: all .3s ease;
}

.input-submit:hover {
  transform: scale(0.98);
  box-shadow: 0 0 12px -1px rgba(128, 90, 213, 0.5),
    0 0 25px -1px rgba(128, 90, 213, 0.5),
    0 0 50px -1px rgba(128, 90, 213, 0.5);
}
</style>