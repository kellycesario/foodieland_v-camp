import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";

export default function FeaturedRecipe() {
  return (
    <>
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
    </>
  );
}
