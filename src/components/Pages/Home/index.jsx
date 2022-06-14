import MoreRecipes from "@organisms/MoreRecipes";
import CategoriesSection from "@organisms/CategoriesSection";
import FeaturedRecipeCard from "../../Molecules/FeaturedRecipeCard";
import LearnMore from "../../Organisms/LearnMore";

const Home = () => {
  return (
    <>
      <FeaturedRecipeCard />
      <CategoriesSection />
      <LearnMore />
      <MoreRecipes />;
    </>
  );
};

export default Home;
