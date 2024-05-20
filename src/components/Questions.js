// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption === questionData.answer);
    setSelectedOption(null);
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="options">
          {questionData.options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
        <button type="submit" className="next-button">Siguiente Pregunta</button>
      </form>
    </div>
  );
};

export default Question;