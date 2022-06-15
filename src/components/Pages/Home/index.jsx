import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import CategoriesSection from "@organisms/CategoriesSection";
import LearnMore from "@organisms/LearnMore";
import SocialMediaPubli from "@organisms/SocialMediaPubli";
import MoreRecipes from "@organisms/MoreRecipes";


const Home = () => {
  return (
    <>
      <FeaturedRecipeCard />
      <CategoriesSection />
      <LearnMore />
      <SocialMediaPubli />
      <MoreRecipes />;
    </>
  );
};

export default Home;
