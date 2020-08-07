<template>
  <div
    class="absolute bubble_position z-50 bg-gray-400 p-2 rounded text-sm border-b-4 border-purple-600"
  >
    <div class="triangle"></div>
    <p class="text-purple-900 text-opacity-75">{{hour}} {{formatDate(date)}}</p>
  </div>
</template>

<script>
export default {
  props: ["date", "hour"],
};
</script>

<style>
.bubble_position {
  left: -150%;
  bottom: -300%;
}

.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #cbd5e0 transparent;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>