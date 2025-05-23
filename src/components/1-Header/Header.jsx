import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './../../assets/jo.png';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      setScroll(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      style={{
        top: isVisible ? "0" : "-80px",
        backgroundColor: theme === "light" ? "white" : "var(--primary-color)",
        color: theme === "light" ? "black" : "white",
        transition: "top 0.3s ease-in-out, background-color 0s step-end",
        boxShadow: scroll ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "none",
      }}
    >
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <ul className="flex">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="flex g-2 her">
        <button onClick={() => setShowModal(true)} className="icon icon-list2"></button>
        <button
          className="mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <span className="icon-moon-o"></span>
          ) : (
            <span className="icon-sun1"></span>
          )}
        </button>
      </div>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li className="icon-exit" onClick={() => setShowModal(false)} />
            <li onClick={() => setShowModal(false)}><a href="#about">About</a></li>
            <li onClick={() => setShowModal(false)}><a href="#skills">Skills</a></li>
            <li onClick={() => setShowModal(false)}><a href="#projects">Projects</a></li>
            <li onClick={() => setShowModal(false)}><a href="#location">Location</a></li>
            <li onClick={() => setShowModal(false)}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}