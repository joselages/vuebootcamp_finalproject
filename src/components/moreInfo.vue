<template>
  <div>
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
  transform: translate3d(-50%, 0, 0);
  left: 50%;
  top: calc(100% + 10px);
}

.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #edf2f7 transparent;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>