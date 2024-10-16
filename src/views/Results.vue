<template lang="">
  <div class="results">
    <div class="container">
      <h1 class="results__title">{{ title }}</h1>
      <p class="results__text">
        {{ text.split("<br />")[0] }}
        <br />
        {{ text.split("<br />")[1] }}
      </p>

      <ul class="results__list">
        <li
          class="results__list-item"
          v-for="answer in $store.state.userAnswers"
        >
          <ResultsCard
            :title="answer.title"
            :text="answer.text"
            :correct="answer.correct"
          />
        </li>
      </ul>

      <Button class="results__btn" @click="restart">Пройти еще раз</Button>
    </div>
  </div>
</template>

<script setup>
import ResultsCard from "@/components/ResultsCard.vue";
import router from "@/router";
import store from "@/store";
import { ref, watchEffect } from "vue";

const title = ref("");
const text = ref("");

const correct = store.state.correctAnswersCount;
const total = store.state.questions.length;

const ending = correct > 1 && correct < 5 ? "а" : correct >= 5 ? "ов" : "";

watchEffect(() => {
  if (store.state.userAnswers.length != total) {
    router.replace("/");
  }
});

const restart = () => {
  store.commit("clearState");
  router.push("/");
};

switch (true) {
  case correct === 9:
    title.value = "Поздравляем!";
    text.value =
      "Вы правильно ответили на все вопросы. <br /> Вы действительно отлично разбираетесь в IT.";
    break;

  case correct > 0:
    title.value = "Хороший результат!";
    text.value = `Вы ответили правильно на ${correct} вопрос${ending}. <br /> Так держать!`;
    break;

  case correct === 0:
    title.value = "Упс :(";
    text.value =
      "Вы неправильно ответили на все вопросы. <br /> Нужно подучить теорию.";
}
</script>

<style lang="scss">
.results {
  margin: 80px auto;

  // .results__title

  &__title {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  // .results__text

  &__text {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 140%;
  }

  &__btn {
    font-family: montserrat;

    margin: 40px auto 0 auto;
    padding: 16px 30px;

    max-width: 220px;
    width: 100%;
    display: block;

    background-color: #3300ff;
    color: #fff;

    font-weight: bold;
    font-size: 18px;

    border-radius: 10px;
    border: none;

    cursor: pointer;
  }
}
</style>
