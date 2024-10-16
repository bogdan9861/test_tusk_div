<template lang="">
  <div class="progress" ref="progress">
    <span class="progress__number from">0</span>
    <div
      class="progress__background"
      :style="{
        width: (progress?.clientWidth / total) * currentQuestion + 'px',
      }"
    >
      <span
        class="progress__number current"
        :class="{ active: currentQuestion > 0 }"
        >{{ currentQuestion }}</span
      >
    </div>
    <span class="progress__number to">{{ total }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { currentQuestion, total } = defineProps(["currentQuestion", "total"]);

const progress = ref(null);
</script>

<style lang="scss">
.progress {
  max-width: 886px;
  width: 100%;
  height: 12px;
  background-color: #f7f7f7;
  border-radius: 99px;
  margin-top: 43px;
  position: relative;

  &__number {
    position: absolute;
    font-size: 16px;
    font-weight: bold;
  }

  &__background {
    background-color: #3300ff;
    height: 12px;
    border-radius: 99px;
    position: relative;
    transition: all 0.3s;
  }
}

.from {
  top: -22px;
}
.current {
  top: 15px;
  right: 0;
  display: none;
}

.current.active {
  display: block;
}

.to {
  top: -22px;
  right: 0;
}
</style>
