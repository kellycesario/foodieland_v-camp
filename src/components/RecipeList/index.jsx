import Advertising from "../Advertising";
import TastyRecipes from "../TastyRecipes";

import "./style.css";

const RecipeList = () => {
  return (
    <div className="recipeList">
      <Advertising />
      <TastyRecipes />
    </div>
  );
};

export default RecipeList;