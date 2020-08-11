<template>
  <div id="app">
    <navigation></navigation>
    <total-bar></total-bar>
    <modal></modal>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import TotalBar from "./components/TotalBar";
import Modal from "./components/Modal";

export default {
  components: {
    Navigation,
    TotalBar,
    Modal,
  },
};
</script>   

<style>
/*styles provided from scrimba*/
body {
  font-family: "Poppins", sans-serif;
  color: #444;
}

h1 {
  font-weight: 800;
  text-align: center;
  margin: 1.5em 0;
  font-size: 1.6em;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.input-field label {
  font-size: 0.75em;
  margin-bottom: 10px;
}

.input-field input {
  padding: 10px 0;
}

.currency {
  font-size: 25px;
  padding: 2px 8px 0 0;
  color: #999;
}

.toggle-switch {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
}

.toggle-switch input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.toggle-switch label {
  background-color: #f5f0ff;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.toggle-switch label:hover {
  cursor: pointer;
}

.toggle-switch input:checked + label {
  background-color: rgba(129, 90, 213, 0.95);
  color: #e8dffa;
  box-shadow: none;
}

.toggle-switch label:first-of-type {
  border-radius: 5px 0 0 5px;
}

.toggle-switch label:last-of-type {
  border-radius: 0 5px 5px 0;
}

.balance {
  background: #cbd5e0;
  text-align: center;
  padding: 5px;
}
</style>
