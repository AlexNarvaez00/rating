import { preguntas } from "../mocks/questions.json";

const allQuestions = preguntas.map(({ texto, id }) => ({ texto, id }));

export async function getAllQuestions() {
  return allQuestions;
}

export async function getNextQuestion(currentNumberQuestion) {
  return {
    question: allQuestions[currentNumberQuestion],
    hasNext: currentNumberQuestion < allQuestions.length,
  };
}
