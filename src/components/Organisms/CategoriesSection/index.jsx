import CategoriesCards from "@molecules/CategoriesList";
import ViewAllCategoriesButton from "../../Atoms/ViewAllCategories";
import "./style.scss";

const CategoriesSection = () => {
  return (
    <div className="categoriesSection">
      <div className="categoriesSection__header">
        <h1 className="categoriesSection__title">Categories</h1>
        <ViewAllCategoriesButton/>
      </div>
      <CategoriesCards />
    </div>
  );
};

export default CategoriesSection;
