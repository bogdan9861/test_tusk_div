<template lang="">
  <div class="card">
    <h2 class="card__title">{{ title }}</h2>
    <ul class="card__list">
      <li class="card__list-item" v-for="(answer, i) in answers">
        <label>
          <input type="radio" hidden />
          <div
            ref="radio"
            class="card__list-item__radio"
            @click="onHandleAnswer(i, answer.correct)"
          ></div>
        </label>

        <p class="card__list-item__text">
          {{ answer?.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import store from "@/store";
import { ref } from "vue";

const { title, answers } = defineProps(["title", "answers"]);

const radio = ref(null);
const timeout = ref(null);
const delay = 1000;

const disableAllRadio = () => {
  radio.value.forEach((el) => {
    el.classList.remove("active");
  });
};

const onHandleAnswer = (i, isCorrect) => {
  clearTimeout(timeout.value);

  disableAllRadio();
  radio.value[i].classList.add("active");

  timeout.value = setTimeout(() => {
    disableAllRadio();

    store.commit("nextQuestion");

    store.commit("pushUserAnswer", {
      title,
      text: answers[i].title,
      correct: isCorrect,
    });

    if (isCorrect) {
      store.commit("incCorrectUnswersCount");
    }
  }, delay);
};
</script>

<style lang="scss">
.card {
  padding: 40px;
  background-color: rgba(247, 247, 247, 1);
  width: 100%;
  border-radius: 20px;
  margin: 0 auto;
  min-height: 528px;

  // .card__title

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  // .card__list

  &__list {
  }

  // .card__list-item

  &__list-item {
    display: flex;
    align-items: center;
    gap: 0 20px;
    margin-bottom: 20px;
  }

  &__list-item__text {
    font-size: 16px;
    max-width: 766px;
  }

  &__list-item__radio {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.2s;
  }

  &__list-item__radio.active {
    background-color: #3300ff;
    border: 1px solid #3300ff;
  }
}
</style>
