import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img 
            src="/src/assets/react.svg"
            alt="React Logo"
            className="react-icon"
          />
        </Link>
        <span className="logo-text">QuizApp</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quizPage">Quiz</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;