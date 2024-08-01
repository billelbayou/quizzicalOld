import React from "react";
import "./Start.css";
export default function Start(props) {
  return (
    <React.StrictMode>
      <div className="start">
        <h1>Quizzical</h1>
        <p>Show us your knowledge !!</p>
        <button onClick={props.startStatus}>Start Quiz</button>
      </div>
    </React.StrictMode>
  );
}
