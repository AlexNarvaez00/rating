import { getAllQuestions, getNextQuestion } from "@/services/questions.service";
import { useEffect, useState } from "react";
import Question from "@/components/Question";
import Container from "@/components/Container";
import Answers from "./components/Answers";

const App = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(0);

  useEffect(() => {
    getNextQuestion(numberQuestion).then((res) => {
      setQuestion(res);
    });
  }, [numberQuestion]);

  const handleClickReset = () => {
    setQuestion(null)
    setAnswers([])
    setNumberQuestion(0);
  }

  const handleChange = (id, stars) => {
    setAnswers((prev) => [{ ...question, stars }, ...prev]);
    setNumberQuestion((prev) => prev + 1);
  };

  return (
    <div className="w-full min-h-screen flex bg-neutral-50">
      <Container className="grid grid-cols-[repeat(1,minmax(0,400px))] justify-center min-h-[100%]">
        {question?.question?.texto && question?.hasNext && (
          <Question
            title={question.question.texto}
            id={question.question.id}
            onClick={handleChange}
          />
        )}
        {!question?.hasNext && <Answers 
          answers={answers} 
            onReset={handleClickReset}
        />}
      </Container>
    </div>
  );
};

export default App;
