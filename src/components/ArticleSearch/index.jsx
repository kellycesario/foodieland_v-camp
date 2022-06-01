import { useEffect, useState } from "react";
import MainButton from "../MainButton";
import logo from "./../../../public/assets/icons/searchIcon.png";

import "./style.css";

export default function ArticleSearch() {
  function test(e) {
    alert("a");
  }

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="articleSearch">
        <h1 className="articleSearch__title">Blog & Article</h1>
        <p className="articleSearch__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit earum odio quas.
        </p>
        <form className="articleSearch__form" action="">
          <input
            className="articleSearch__input"
            placeholder="Search article, news or recipe..."
            type="text"
          />
          <button className="articleSearch__button" onClick={test}>
            <img className="articleSearch__img inside" src={logo} alt="" />
          </button>
          {dimensions.width > 768 && (
            <MainButton InsideInput={true} Content={"Search"}></MainButton>
          )}
        </form>
      </div>
    </>
  );
}
