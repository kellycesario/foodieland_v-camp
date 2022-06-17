import johnLogo from "@img/johnSmithLogo.png";

import style from "./style.module.scss";

export default function RecipeAuthor({ author, date }) {
  return (
    <>
      <div className={style.recipeAuthorContainer}>
        <img
          className={style.RecipeAuthorContainer__logo}
          src={johnLogo}
          alt=""
        />
        <div className={style.recipeAuthorContainer__info}>
          <p className={style.recipeAuthorContainer__name}>{author}</p>
          <p className={style.recipeAuthorContainer__date}>{date}</p>
        </div>
      </div>
    </>
  );
}
