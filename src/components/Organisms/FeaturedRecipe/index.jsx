import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";

export default function FeaturedRecipe() {
  return (
    <>
      <div className="featuredRecipe">
        <button className="btn btn--light btn--rounded btn--tiny">
          <img src={ArrowLeft} alt="" />
        </button>
        <ul className="featuredRecipe__list">
          <li className="featuredRecipe__item">
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
        </ul>
        <button className="btn btn--light btn--rounded btn--tiny">
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </>
  );
}
