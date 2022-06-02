import Advertising from "../Advertising";
import TastyRecipes from "../TastyRecipes";

import "../../pages/BlogPage.css";

const RecipeList = () => {
  return (
    <div className="tastyrecipes">
      <Advertising />
      <TastyRecipes />
    </div>
  );
};

export default RecipeList;