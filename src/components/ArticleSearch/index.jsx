import MainButton from "../MainButton";
import logo from "./searchIcon.png";

import "./style.css";

export default function ArticleSearch() {
  function test(e) {
    alert("a");
  }

  return (
    <>
      <div className="mainContainer">
        <h1 className="mainContainer__title">Blog & Article</h1>
        <p className="mainContainer__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit earum odio quas.
        </p>
        <form className="mainContainer__form" action="">
          <input className="mainContainer__input" placeholder="Search article, news or recipe..." type="text" />
          {/* <button className="mainContainer__button" onClick={test}>
            <img className="mainContainer__img inside" src={logo} alt="" />
          </button> */}
          <MainButton className="temp" Content={"Search"}></MainButton>
        </form>
      </div>
    </>
  );
}
