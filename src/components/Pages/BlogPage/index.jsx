import { useState, useEffect } from "react";

import ArticleList from "@temp/ArticleList";
import Pagination from "@temp/Pagination";
import RecipeList from "@temp/RecipeList";
import ArticleSearch from "@temp/ArticleSearch";

import "./style.css"

export default function BlogPage() {
  const [itens, setItens] = useState([]);
  const [itensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("../../../database.json")
        .then((resp) => resp.json())
        .then((data) => data.articles);

      setCurrentItems(result.slice(0, itensPerPage));
      setItens(result);
    };
    fetchData();
  }, []);

  function handlePageChange(page) {
    const startIndex = page * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    setCurrentItems(itens.slice(startIndex, endIndex));
    setCurrentPage(page);
  }

  return (
    <>
      <ArticleSearch />

      <div className="blogPageWrapper">
        <ArticleList dataPagination={currentItens} />
        <Pagination sendPage={handlePageChange} />
        <RecipeList />
      </div>
    </>
  );
}
