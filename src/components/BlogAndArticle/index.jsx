import MainButton from "../MainButton";
import logo from "./searchIcon.png"

import "./style.css"

export default function BlogAndArticle() {
  function test(){alert('a')}
  
  return (
    <>
      <div className="blogContainer">
        <h1 className="blogContainer__title">Blog & Article</h1>
        <p className="blogContainer__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit earum odio quas.
        </p>
        <form className="blogContainer__form" action="">
          <input type="text" />
          <img onClick={test} className="blogContainer__img" src={logo} alt="" />
          {/* <MainButton Content="Search" InsideInput={true}></MainButton> */}
        </form>
      </div>
    </>
  );
}
