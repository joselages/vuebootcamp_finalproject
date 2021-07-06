<template>
  <div class="absolute w-full h-full pt-20 z-10" style="background-color:rgba(0,0,0,0.65)" v-if="modalState">

    <div class="modal-window w-11/12 bottom-7 sm:w-9/12 md:max-w-lg">
      <div class="modal-title">Tem a certeza?</div>
      <div class="modal-body">
        A transação será eliminado e não poderá voltar atrás...
      </div>

      <div class="button-wrapper">
        <button @click.prevent="closeModal" class="cancel-button">
          Cancelar
        </button>
        <button
          @click.prevent="$store.dispatch('resolveModal')"
          class="ok-button"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
export default {
  computed: {
    ...mapGetters(["modalState"]),
  },
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
};
</script>

<style>
.modal-wrapper {
  background: #333;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 80%;
  z-index: 1000;
}
.modal-window {
  background: #eee;

  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding: 30px;
  border-radius: 0.25rem;
}

@media (min-width: 640px) {
  .modal-window {
    bottom: initial !important;
  }
}

.modal-title {
  font-weight: bold;
  font-size: 18px;
}
.modal-body {
  font-size: 12px;
  margin: 10px 0 30px 0;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
}
.cancel-button {
  padding: 10px 20px;
}
.ok-button {
  color: #ebf8ff;
  padding: 10px 20px;
  background-color: rgba(239, 68, 68);
  border-radius: 0.25rem;
}
</style>