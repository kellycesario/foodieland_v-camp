import FeaturedRecipe from "@organisms/FeaturedRecipe";
import CategoriesSection from "@organisms/CategoriesSection";
import LearnMore from "@organisms/LearnMore";
import SocialMediaPubli from "@organisms/SocialMediaPubli";
import MoreRecipes from "@organisms/MoreRecipes";

const Home = () => {
  return (
    <>
      <FeaturedRecipe />
      <CategoriesSection />
      <LearnMore />
      <SocialMediaPubli />
      <MoreRecipes />;
    </>
  );
};

export default Home;
