import RecipeList from "@molecules/RecipeList";
import MoreRecipesTxt from "@molecules/MoreRecipesTxt";

import "./index.scss";

const MoreRecipes = () => {
  return (
    <sction className="MoreRecipes">
      <MoreRecipesTxt />
      <RecipeList />
    </sction>
  );
};

export default MoreRecipes;
