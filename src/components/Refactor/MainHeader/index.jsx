import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "@icons/foodielandLogo.svg";

const Header = () => {
  const [Modal, setModal] = useState(false);
  const handleClick = () => {
    if (Modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  const [windoWidth, setwindoWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindoWidth(window.innerWidth);
    if (window.innerWidth > 1023) {
      setModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="navBar">
        <img src={logo} className="navBar__img" />
        <ul className={`navBar__lists ${Modal ? "navBar__lists--active" : ""}`}>
          <a href="/">
            <li className="navBar__item">Home</li>
          </a>
          <a href="/recipes">
            <li className="navBar__item">Recipes</li>
          </a>
          <a href="/blogListPage">
            <li className="navBar__item">Blog</li>
          </a>
          <a href="/aboutUs">
            <li className="navBar__item">About us</li>
          </a>
          <a href="/contact">
            <li className="navBar__item">Contact</li>
          </a>
        </ul>
        <div
          className={`navBar__burguerBtn ${
            Modal ? "navBar__burguerBtn--active" : ""
          }`}
          onClick={handleClick}
        >
          <span className="navBar__burguer1"></span>
          <span className="navBar__burguer2"></span>
          <span className="navBar__burguer3"></span>
        </div>
        <div className="navBar__icons">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navBar__svg"
          >
            <path
              d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"
              fill="black"
            />
          </svg>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navBar__svg"
          >
            <path
              d="M22.9619 2.11613C22.1438 2.475 21.272 2.71288 20.3632 2.82838C21.2982 2.27013 22.0118 1.39287 22.3473 0.3355C21.4755 0.85525 20.513 1.22238 19.4873 1.42725C18.6595 0.545875 17.4798 0 16.1928 0C13.6958 0 11.6855 2.02675 11.6855 4.51137C11.6855 4.86888 11.7158 5.21263 11.79 5.53988C8.04041 5.357 4.72254 3.55988 2.49366 0.82225C2.10454 1.49738 1.87629 2.27012 1.87629 3.102C1.87629 4.664 2.68066 6.04862 3.87966 6.85025C3.15504 6.8365 2.44416 6.62613 1.84191 6.29475C1.84191 6.3085 1.84191 6.32638 1.84191 6.34425C1.84191 8.536 3.40529 10.3565 5.45541 10.7759C5.08829 10.8763 4.68816 10.9244 4.27291 10.9244C3.98416 10.9244 3.69266 10.9079 3.41904 10.8474C4.00341 12.6335 5.66166 13.9466 7.63341 13.9893C6.09891 15.1896 4.15054 15.9129 2.04129 15.9129C1.67141 15.9129 1.31666 15.8964 0.961914 15.851C2.95979 17.1394 5.32754 17.875 7.88091 17.875C16.1804 17.875 20.7179 11 20.7179 5.04075C20.7179 4.84137 20.711 4.64887 20.7014 4.45775C21.5965 3.8225 22.3487 3.02913 22.9619 2.11613Z"
              fill="black"
            />
          </svg>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navBar__svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.83691 0H16.0869C19.8833 0 22.9619 3.07862 22.9619 6.875V15.125C22.9619 18.9214 19.8833 22 16.0869 22H7.83691C4.04054 22 0.961914 18.9214 0.961914 15.125V6.875C0.961914 3.07862 4.04054 0 7.83691 0ZM16.0869 19.9375C18.7407 19.9375 20.8994 17.7787 20.8994 15.125V6.875C20.8994 4.22125 18.7407 2.0625 16.0869 2.0625H7.83691C5.18316 2.0625 3.02441 4.22125 3.02441 6.875V15.125C3.02441 17.7787 5.18316 19.9375 7.83691 19.9375H16.0869Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.46191 11C6.46191 7.96263 8.92454 5.5 11.9619 5.5C14.9993 5.5 17.4619 7.96263 17.4619 11C17.4619 14.0374 14.9993 16.5 11.9619 16.5C8.92454 16.5 6.46191 14.0374 6.46191 11ZM8.52441 11C8.52441 12.8948 10.0672 14.4375 11.9619 14.4375C13.8567 14.4375 15.3994 12.8948 15.3994 11C15.3994 9.10388 13.8567 7.5625 11.9619 7.5625C10.0672 7.5625 8.52441 9.10388 8.52441 11Z"
              fill="black"
            />
            <circle cx="17.8745" cy="5.0875" r="0.732875" fill="black" />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Header;
