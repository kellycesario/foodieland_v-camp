import FeaturedRecipe from "@organisms/FeaturedRecipe";
import CategoriesSection from "@organisms/CategoriesSection";
import LearnMore from "@organisms/LearnMore";
import SocialMediaPubli from "@organisms/SocialMediaPubli";
import MoreRecipes from "@organisms/MoreRecipes";
import Newsletter from "@organisms/Newsletter"

const Home = () => {
  return (
    <>
      <FeaturedRecipe />
      <CategoriesSection />
      <LearnMore />
      <SocialMediaPubli />
      <MoreRecipes />
      <Newsletter />;
    </>
  );
};

export default Home;