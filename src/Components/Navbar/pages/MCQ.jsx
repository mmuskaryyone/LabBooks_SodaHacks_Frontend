import React, { useState } from "react";
import "./MCQ.css";

const MCQBlock = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === correctAnswer) {
      setShowCorrectAnswer(false); // Do not show the correct answer if the answer is correct
    } else {
      setShowCorrectAnswer(true); // Show correct answer if the answer is wrong
    }
  };

  return (
    <div className="mcq-block">
      <h2 className="mcq-question">{question}</h2>
      <ul className="mcq-options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`mcq-option ${isAnswered ? 
                (option === correctAnswer ? "correct" : (option === selectedAnswer ? "wrong" : "")) 
                : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {isAnswered && (
        <div className="feedback">
          {showCorrectAnswer ? (
            <p className="wrong-feedback">
              Wrong answer. The correct answer is: <strong>{correctAnswer}</strong>
            </p>
          ) : (
            <p className="correct-feedback">Correct answer!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MCQBlock;
