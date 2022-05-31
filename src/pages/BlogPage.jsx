import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
import Advertising from "../components/Advertising";
import TastyRecipes from "../components/TastyRecipes";

export default function BlogPage() {
  return (
    <>
      <ArticleList />
      <Pagination />
      <Advertising />
      <TastyRecipes />
    </>
  );
}
