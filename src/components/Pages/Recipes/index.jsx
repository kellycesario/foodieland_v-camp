import Newsletter from "@organisms/Newsletter"
import CarrouselFood from "@temp/Carrousel";
import RecipeDetails from '@molecules/RecipeDetails';

const Recipes = () => {
  return (
    <>
        <RecipeDetails />
        <Newsletter />
        <CarrouselFood />
    </>
  );
};

export default Recipes;