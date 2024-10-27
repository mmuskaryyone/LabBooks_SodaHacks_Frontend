import React, { useState } from 'react';

const EditableMcqBlock = ({ question, options, answer, onSave }) => {
  const [mcqContent, setMcqContent] = useState({ question, options, answer });

  const handleQuestionChange = (e) => {
    setMcqContent({ ...mcqContent, question: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...mcqContent.options];
    newOptions[index] = e.target.value;
    setMcqContent({ ...mcqContent, options: newOptions });
  };

  return (
    <div className="mcq-block">
      <textarea
        value={mcqContent.question}
        onChange={handleQuestionChange}
        placeholder="Enter your question here"
      />
      {mcqContent.options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
          placeholder={`Option ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default EditableMcqBlock;