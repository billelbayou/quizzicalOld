import React from "react";
import "./Question.css";
import he from "he";

export default function Question({
  question,
  answers = [],
  selectedAnswerIndex,
  correctAnswerIndex,
  onAnswerSelect,
  submitted,
}) {
  const handleClick = (index) => {
    if (!submitted) {
      onAnswerSelect(index);
    }
  };

  return (
    <React.StrictMode>
      <div className="question">
        <h2>{he.decode(question)}</h2>
        <div className="answers">
          {answers.map((answer, index) => {
            let buttonClass = "";
            if (submitted) {
              if (index === correctAnswerIndex) {
                buttonClass = "correct";
              } else if (index === selectedAnswerIndex) {
                buttonClass = "incorrect";
              }
            } else if (selectedAnswerIndex === index) {
              buttonClass = "active";
            }
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={buttonClass}
              >
                {he.decode(answer.value)}
              </button>
            );
          })}
        </div>
      </div>
    </React.StrictMode>
  );
}
