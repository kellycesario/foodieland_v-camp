import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";

export default function FeaturedRecipe() {
  return (
    <>
      <button className="btn btn--light btn--rounded btn--tiny">
        <img src={ArrowLeft} alt="" />
      </button>
      <ul>
        <li>
          <FeaturedRecipeCard />
        </li>
        <li>
          <FeaturedRecipeCard />
        </li>
        <li>
          <FeaturedRecipeCard />
        </li>
      </ul>
      <button>
        <img src={ArrowRight} alt="" />
      </button>
    </>
  );
}
