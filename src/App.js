// src/App.js
import React, { useState } from 'react';
import { questions } from './data/questions';
import Question from './components/Questions';
import Result from './components/Result';
import './App.css';
import image from './image/history.png';

const App = () => {
  const [subject, setSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSubjectSelection = (subject) => {
    setSubject(subject);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions[subject].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetake = () => {
    setSubject(null);
  };

  if (!subject) {
    return (
      <div className="app">
        <div className="welcome">
          <h1>Edukids Exam</h1>
          <img src={image} alt="Niños Aprendiendo" className="background-image" />
          <h2>Selecciona un tema</h2>
          <div className="buttons">
            <button onClick={() => handleSubjectSelection('geography')}>Geografia</button>
            <button onClick={() => handleSubjectSelection('history')}>Historia</button>
            <button onClick={() => handleSubjectSelection('culture')}>Cultura</button>
          </div>
          <div className="warning">
            <p>¡Por favor no copies en tu examen!</p>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <Result score={score} totalQuestions={questions[subject].length} onRetake={handleRetake} />
    );
  }

  return (
    <div className="app">
      <h1>Edukids Exam - {subject.charAt(0).toUpperCase() + subject.slice(1)}</h1>
      <Question
        questionData={questions[subject][currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default App;