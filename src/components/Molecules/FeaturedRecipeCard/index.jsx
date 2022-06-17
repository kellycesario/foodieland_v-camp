import MainButton from "@atoms/MainButton";

import RecipeTime from "../../Atoms/RecipeTime";
import RecipeCategorie from "../../Atoms/RecipeCategorie";

import stamp from "@img/featuredCardStamp.png";

import "./style.css";
import RecipeAuthor from "../../Atoms/RecipeAuthor";

export default function FeaturedRecipeCard() {
  return (
    <>
      <div className="featuredRecipeCard">
        <div className="featuredRecipeCard__leftContainer">
          <div className="featuredRecipecard__categoriesStamp">
            <img src={stamp} alt="" />
          </div>

          <div className="featuredRecipeCard__cardInfo">
            <h1 className="featuredRecipeCard__title">
              Spicy Delicious Chicken Wings
            </h1>

            <p className="featuredRecipeCard__subTitle">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>

            <div className="featuredRecipeCard__recipeInfo">
              <RecipeTime time={30} />
              <RecipeCategorie />
            </div>
          </div>

          <footer className="featuredRecipeCard__footer">
            <RecipeAuthor date={"15 March 2022"} author={"John Smith"} />
            <MainButton Content={"View Recipe"} />
          </footer>
        </div>

        <div className="featuredRecipeCard__badge">
          <img
            src="../../../../public/assets/img/featuredRecipeBadge.png"
            alt=""
          />
        </div>
        <div className="featuredRecipeCard__rightContainer">
          {/* <img src={featuredCardRecipe} alt="" /> */}
        </div>
      </div>
    </>
  );
}
