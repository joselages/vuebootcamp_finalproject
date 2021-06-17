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
  created() {
    this.getFromLS();
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
  width: 100%;
  margin-bottom: 0.75rem;
}

.input-field.-half-width {
  width: 50%;
}

.-error {
  border: 1px solid #e53e3e !important;
}

.input-field.-half-width:first-of-type {
  margin-right: 1rem;
}

.input-field label {
  font-size: 0.75em;
  margin-bottom: 0.1rem;
}

.input-field input:not(.-no-border) {
  padding: .75rem;
  border: 1px solid #e2e8f0;
  border-radius:.25rem;
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
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(35, 26, 54, 0.295);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid #e2e8f0;
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.toggle-switch label:hover {
  cursor: pointer;
}

.toggle-switch input:checked + label {
  border:1px solid rgba(129, 90, 213, 0.95);
  background-color: rgba(129, 90, 213, 0.15);
  color: rgba(129, 90, 213, 0.95);
  box-shadow: none;
}

.checkbox-emoji {
  display: inline-block;
  transform: scale(0.9);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toggle-switch input:checked + label > .checkbox-emoji {
  transform: scale(1.4);
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
