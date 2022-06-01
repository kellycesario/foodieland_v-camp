import ArticleList from "../components/ArticleList";
import TastyRecipes from "../components/TastyRecipes";
import Pagination from "../components/Pagination";

export default function BlogPage() {
  return (
    <>
      <ArticleList />
      <Pagination />
      <TastyRecipes />
      
    </>
  );
}
