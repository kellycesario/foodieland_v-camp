import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";

export default function FeaturedRecipe() {
  return (
    <>
      <div className="container">
        <CarrouselBtn direction={"left"} />
        <ul className="container__list">
          <li className="container__items">
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
        </ul>
        <CarrouselBtn direction={"right"} />
      </div>
    </>
  );
}
