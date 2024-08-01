import React, { useEffect } from "react";
import Question from "./Question";
import datas from "../data";

export default function Main() {
  const [data, setData] = React.useState(datas);
  const [userAnswers, setUserAnswers] = React.useState(
    Array(datas.length).fill(null)
  );
  const [shuffledAnswers, setShuffledAnswers] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    const shuffled = data.map((item) => {
      const answers = [
        { value: item.incorrect_answers[0], correct: false },
        { value: item.incorrect_answers[1], correct: false },
        { value: item.incorrect_answers[2], correct: false },
        { value: item.correct_answer, correct: true },
      ];
      return answers.sort(() => Math.random() - 0.5);
    });
    setShuffledAnswers(shuffled);
  }, [data]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  const submitButton = () => {
    setSubmitted(true);
  };

  return (
    <React.StrictMode>
      {data.map((item, index) => (
        <Question
          key={index}
          question={item.question}
          answers={shuffledAnswers[index]}
          selectedAnswerIndex={userAnswers[index]}
          correctAnswerIndex={shuffledAnswers[index]?.findIndex(
            (a) => a.correct
          )}
          onAnswerSelect={(answerIndex) =>
            handleAnswerSelect(index, answerIndex)
          }
          submitted={submitted}
        />
      ))}
      <button className="submit" onClick={submitButton}>
        Check Answers
      </button>
    </React.StrictMode>
  );
}
