import style from "./style.module.css";

import fork from "@icons/forkKnife.svg";

export default function recipeCategorie({}) {
  return (
    <>
      <div className={style.recipeCategorieContainer}>
        <img
          className={style.recipeCategorieContainer__img}
          src={fork}
          alt=""
        />
        <p className={style.recipeCategorieContainer__text}>Chicken</p>
      </div>
    </>
  );
}
