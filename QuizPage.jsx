import React, { useState, useEffect } from "react";
import questions from "./question";
import "./QuizPage.css";

function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [localScore, setLocalScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, currentQ]);

  // Submit Quiz
  const handleSubmit = () => {
    let finalScore = localScore;
    if (selected === questions[currentQ].answer) {
      finalScore += 1;
    }
    
    // Update localStorage with final score
    localStorage.setItem("userScore", finalScore.toString());
    alert("Quiz finished! Check your Profile to see your score.");
  };

  // Next Question
  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setLocalScore(localScore + 1);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setTimeLeft(30);
    } else {
      handleSubmit();
    }
  };

  // Previous Question
  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(null);
      setTimeLeft(30);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Question {currentQ + 1} / {questions.length}</h2>
        <p>{questions[currentQ].question}</p>
        <div className="options">
          {questions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              className={selected === opt ? "selected" : ""}
              onClick={() => setSelected(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <p>Time left: {timeLeft}</p>
        <div className="controls">
          <button onClick={handlePrev} disabled={currentQ === 0}>
            Previous
          </button>
          {currentQ === questions.length - 1 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;