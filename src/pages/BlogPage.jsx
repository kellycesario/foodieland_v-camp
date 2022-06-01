import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
import Advertising from "../components/Advertising";
import TastyRecipes from "../components/TastyRecipes";

import "./BlogPage.css";

export default function BlogPage() {
  return (
    <>
      <ArticleList />
      <Pagination />
      <div className="tastyrecipes">
        <Advertising />
        <TastyRecipes />
      </div>
    </>
  );
}
