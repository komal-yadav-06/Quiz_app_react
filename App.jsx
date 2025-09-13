import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header.jsx';
import Home from './Component/Home.jsx';
import QuizPage from './Component/QuizPage.jsx';
import Profile from './Component/Profile.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizPage" element={<QuizPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;