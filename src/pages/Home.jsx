import { useNavigate } from "react-router-dom";
import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-bg">
      <div className="home-shell">

        {/* NAVBAR */}
        <div className="home-navbar">
          <div className="nav-left">
            <div className="logo-wrap">
              {/* LOGO ICON */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 14c0-4 3-7 8-7h2"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="6" cy="16" r="2" fill="white" />
              </svg>
              <span className="logo">Logisfera</span>
            </div>
          </div>

          <div className="nav-center">
            <span className="pill active">Beranda</span>
            <span className="pill">Learning</span>
            <span className="pill">AR Viewer</span>
            <span className="pill">Quiz</span>
            <span className="pill">Quiz</span>
            <span className="pill">Calculator</span>
          </div>

          <div className="nav-right">
            <button className="calc-btn">
              {/* CALCULATOR ICON */}
              <svg width="16" height="16" viewBox="0 0 24 24">
                <rect x="5" y="3" width="14" height="18" rx="2" fill="#0b1f3a" />
                <rect x="8" y="7" width="8" height="2" fill="white" />
                <circle cx="9" cy="13" r="1" fill="white" />
                <circle cx="13" cy="13" r="1" fill="white" />
                <circle cx="9" cy="17" r="1" fill="white" />
                <circle cx="13" cy="17" r="1" fill="white" />
              </svg>
              Calculator
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="home-content">
          <h1 className="title">LOGISFERA</h1>
          <p className="subtitle">
            Unlock Your Potential in Logistics & Supply Chain
          </p>

          <div className="cards">

  {/* LEARNING PATH */}
  <div className="card clickable" onClick={() => navigate("/learning")}>
    <div className="icon">
      <svg width="36" height="36" viewBox="0 0 24 24">
        <path
          d="M6 4h6a4 4 0 014 4v10"
          stroke="#0b1f3a"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="6" cy="18" r="2" fill="#0b1f3a" />
      </svg>
    </div>
    <h3>Learning Path</h3>
    <p>Start your journey</p>
  </div>

  {/* AR VIEWER */}
  <div className="card clickable" onClick={() => navigate("/ar")}>
    <div className="icon">
      <svg width="36" height="36" viewBox="0 0 24 24">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="2"
          stroke="#0b1f3a"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
    <h3>AR Viewer</h3>
    <p>Explore Models</p>
  </div>

  {/* QUIZ */}
  <div className="card clickable" onClick={() => navigate("/quiz")}>
    <div className="icon">
      <svg width="36" height="36" viewBox="0 0 24 24">
        <path
          d="M8 4h8v4a4 4 0 01-8 0V4z"
          stroke="#0b1f3a"
          strokeWidth="2"
          fill="none"
        />
        <path d="M6 20h12" stroke="#0b1f3a" strokeWidth="2" />
      </svg>
    </div>
    <h3>Quiz</h3>
    <p>Test Your Knowledge</p>
  </div>

</div>


          <div className="badge">
            <span className="dot" /> AMMIN “PROTOTYPE”
          </div>
        </div>

      </div>
    </div>
  );
}