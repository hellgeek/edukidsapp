// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === null) {
      setError('Por favor seleccione una opcion antes de proceder.');
    } else {
      onAnswer(selectedOption === questionData.answer);
      setSelectedOption(null);
    }
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <form onSubmit={handleSubmit}>
        {questionData.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
