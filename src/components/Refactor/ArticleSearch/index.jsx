import { useEffect, useState } from "react";
import logo from "@img/searchIcon.png";

import "./style.css";

export default function ArticleSearch() {
  const [userSearch, setUserSearch] = useState("");

  function onChangeHandler(e) {
    setUserSearch(e.target.value);
  }

  function clickHandler(e) {
    e.preventDefault();
    alert(userSearch);
  }

  // Fix bug on resizing the screen
  /*
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


// Oq era renderizado antes:
   {dimensions.width > 768 && (
            <MainButton InsideInput={true} Content={"Search"}></MainButton>
          )}
   */

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
            onChange={onChangeHandler}
            className="articleSearch__input"
            placeholder="Search article, news or recipe..."
            type="text"
          />
          <button
            type="submit"
            className="articleSearch__button"
            onClick={clickHandler}
          >
            <img className="articleSearch__img inside" src={logo} alt="" />
          </button>
          <button
            type="submit"
            className="tempArticleBtn btn btn--insideInput"
            onClick={clickHandler}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
