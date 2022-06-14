import MoreRecipes from "@organisms/MoreRecipes";
import CategoriesSection from "@organisms/CategoriesSection";
import FeaturedRecipe from "@organisms/FeaturedRecipe";
import LearnMore from "@organisms/LearnMore";

const Home = () => {
  return (
    <>
      <FeaturedRecipe />
      <CategoriesSection />
      <LearnMore />
      <MoreRecipes />;
    </>
  );
};

export default Home;
