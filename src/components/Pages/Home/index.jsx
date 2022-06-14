import MoreRecipes from "@organisms/MoreRecipes";
import CategoriesSection from "@organisms/CategoriesSection";
import FeaturedRecipeCard from "../../Molecules/FeaturedRecipeCard";
import LearnMore from "../../Organisms/LearnMore";
import CarrouselBtn from "../../Atoms/CarrouselBtn";

const Home = () => {
  return (
    <>
      <CarrouselBtn />
      <button className="btn btn--light btn--tiny">{'<'}</button>
      <button className="btn btn--rounded btn--light btn--tiny">{'>'}</button>
      {/* <FeaturedRecipeCard />
      <CategoriesSection />
      <LearnMore />
      <MoreRecipes />; */}
    </>
  );
};

export default Home;
