<template>
  <div v-if="modalState">
    <div class="modal-wrapper"></div>

    <div class="modal-window">
      <div class="modal-title">Are you sure?</div>
      <div class="modal-body">This action can't be undone.</div>

      <div class="button-wrapper">
        <button @click.prevent="closeModal" class="cancel-button">Cancel</button>
        <button @click.prevent="$store.dispatch('resolveModal')" class="ok-button">OK</button>
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
  width: 275px;
  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding: 30px;
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
  background: #2c5282;
  border-radius: 10px;
}
</style>