import RecipeList from "@molecule/RecipeList";
import MoreRecipesTxt from "@molecule/MoreRecipesTxt";
import "./index.scss"

const MoreRecipes = () => {
  return (
    <sction className="MoreRecipes">
      <MoreRecipesTxt />
      <RecipeList />
    </sction>
  );
};

export default MoreRecipes;
