<template>
  <div class="container">
    <h1 class="title">Тестирование</h1>
    <Card
      @onRadioPicked="nextQuestion"
      :title="data[currentQuestion]?.title"
      :answers="shuffle(data[currentQuestion]?.answers)"
    />
    <ProgressBar :currentQuestion="currentQuestion" :total="data.length" />
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

<style></style>
