import React, { useState } from "react";
import MCQBlock from "./MCQ";
import TextBlock from "./Text";

const Module = () => {
  const mcqQuestion = "What is the capital of France?";
  const mcqOptions = ["Paris", "London", "Berlin", "Madrid"];
  const mcqCorrectAnswer = "Paris";

  // State to track the user's selected answer and whether it's correct
  const [userAnswer, setUserAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleMCQSelect = (selectedOption) => {
    setUserAnswer(selectedOption);
    setShowCorrectAnswer(true);
  };

  return (
    <div className="module-page">
      <h1>Module 0.0: Blank</h1>

      {/* MCQ Block */}
      <MCQBlock 
        question={mcqQuestion} 
        options={mcqOptions} 
        correctAnswer={mcqCorrectAnswer} 
        onSelect={handleMCQSelect} 
        userAnswer={userAnswer}
        showCorrectAnswer={showCorrectAnswer}
      />

      {/* Text Block */}
      <TextBlock />

      {/* Navigation button back to textbook */}
      <a href="/textbook" className="module-button">Back to Textbook</a>
    </div>
  );
};

export default Module;
