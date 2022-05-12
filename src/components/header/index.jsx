import logo from "../../../public/assets/icons/foodielandLogo.svg";
import "./Header.css";
import React, { useState } from "react";

const Header = () => {
  const [Modal, setModal] = useState(false);
  const handleClick = () => {
    if (Modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  return (
    <> 
      <nav className="navBar">
        <img src={logo} />
        <ul className={`lists ${Modal ? "active" : ""}`}>
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <div className= {`burguer-btn ${Modal ? "active" : ""}`} onClick={handleClick}>
          <span className="burguer1"></span>
          <span className="burguer2"></span>
          <span className="burguer3"></span>
        </div>
      </nav>
    </>
  );
};

export default Header;
