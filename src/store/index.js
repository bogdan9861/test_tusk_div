import { createStore } from "vuex";
import { questions } from "@/data/questions";
import router from "@/router";

export default createStore({
  state: {
    questions,
    userAnswers: [],
    correctAnswersCount: 0,
    currentQuestion: 0,
  },
  mutations: {
    pushUserAnswer(state, action) {
      state.userAnswers.push(action);
    },

    incCorrectUnswersCount(state) {
      state.correctAnswersCount++;
    },
    nextQuestion(state) {
      if (state.currentQuestion < questions.length - 1) {
        state.currentQuestion++;
      } else {
        router.push("/results");
      }
    },
    clearState(state) {
      state.userAnswers = [];
      state.correctAnswersCount = 0;
      state.currentQuestion = 0;
    },
  },
  getters: {},
  modules: {},
});
