<template>
  <div class="home">
    <div class="container">
      <h1 class="home__title">Тестирование</h1>
      <Card
        @onRadioPicked="nextQuestion"
        :title="data[currentQuestion]?.title"
        :answers="shuffle(data[currentQuestion]?.answers)"
      />
      <ProgressBar :currentQuestion="currentQuestion" :total="data.length" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";

import Card from "@/components/Card.vue";
import ProgressBar from "@/components/ProgressBar.vue";

import { shuffle } from "@/utils/shuffle";

const data = shuffle(store.state.questions);

const currentQuestion = computed(() => {
  return store.state.currentQuestion;
});
</script>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
  }
}
</style>
