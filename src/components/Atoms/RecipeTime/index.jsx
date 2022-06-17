import style from "./style.module.css";

import clock from "@icons/timer.svg";

export default function RecipeTime({ time }) {
  return (
    <>
      <div className={style.recipeTimeContainer}>
        <img className={style.recipeTimeContainer__img} src={clock} alt="" />
        <p className={style.recipeTimeContainer__text}>{time} Minutes</p>
      </div>
    </>
  );
}