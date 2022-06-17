import CategoriesCards from "@molecules/CategoriesList";
import "./style.scss";

const CategoriesSection = () => {
  return (
    <div className="categoriesSection">
      <h1 className="categoriesSection__title">Categories</h1>
      <CategoriesCards />
    </div>
  );
};

export default CategoriesSection;
