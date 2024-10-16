<template lang="">
  <div class="result-card" :class="{ red: !correct }">
    <h3 class="result-card__title">{{ title }}</h3>
    <p class="result-card__text">
      {{ text }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(["title", "text", "correct"]);
</script>
<style lang="scss">
.result-card {
  width: 100%;
  padding: 40px;
  background-color: #e5f5e1;
  border-radius: 20px;
  margin-bottom: 20px;
  min-height: 163px;

  &__title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
  }

  &__text {
    font-size: 16px;
    line-height: 135%;
  }
}

.result-card.red {
  background-color: #ffe0e0;
}
</style>
