import MainButton from "@atoms/MainButton";

import style from "./style.module.css";

export default function FeaturedRecipeCard() {
  return (
    <>
      <div className={style.featuredRecipeCard}>
        <div className={style.featuredRecipeCard__leftContainer}>
          <div className={style.featuredRecipecard__categoriesStamp}></div>
          <h1 className={style.featuredRecipeCard__title}>
            Spicy Delicious Wings
          </h1>
          <p className={style.featuredRecipeCard__subTitle}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
          <span className="recipeTime"></span>
          <span className="recipeCategorie"></span>
          <span className="recipeAuthor"></span>
          <MainButton></MainButton>
        </div>
        <div className={style.featuredRecipeCard__badge}></div>
        <div className={style.featuredRecipeCard__rightContainer}></div>
      </div>
    </>
  );
}
