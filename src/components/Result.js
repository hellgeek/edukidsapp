// src/components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onRetake }) => {
  const percentage = (score / totalQuestions) * 100;
  const isPassed = percentage >= 70;

  return (
    <div className="result">
      <h2>{isPassed ? 'Felicidades!' : 'Mejor suerte la proxima vez!'}</h2>
      <p>Tu Puntuacion es {score} buenas de {totalQuestions}.</p>
      <button onClick={onRetake}>Retomar el Exámen</button>
    </div>
  );
};

export default Result;
