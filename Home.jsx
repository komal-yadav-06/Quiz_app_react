import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      const name = prompt("Enter your name:");
      if (name) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userScore", "0");
      }
    }
    navigate("/quizPage");
  };

  return (
    <div className="home">
      <h1>Welcome to the Quiz App</h1>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default Home;