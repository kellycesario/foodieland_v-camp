import MainButton from "@atoms/MainButton";

import featuredCardRecipe from '@img/featuredCardRecipe.png';

import "./style.css";

export default function FeaturedRecipeCard() {
  return (
    <>
      <div className="featuredRecipeCard">
        <div className="featuredRecipeCard__leftContainer">
          <div className="featuredRecipecard__categoriesStamp"></div>
          <h1 className="featuredRecipeCard__title">Spicy Delicious Chicken Wings</h1>
          <p className="featuredRecipeCard__subTitle">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
          <span className="recipeTime"></span>
          <span className="recipeCategorie"></span>
          <span className="recipeAuthor"></span>
          <MainButton></MainButton>
        </div>
        <div className="featuredRecipeCard__badge">
          <img src="../../../../public/assets/img/featuredRecipeBadge.png" alt="" />
        </div>
        <div className="featuredRecipeCard__rightContainer">
          {/* <img src={featuredCardRecipe} alt="" /> */}
        </div>
      </div>
    </>
  );
}
