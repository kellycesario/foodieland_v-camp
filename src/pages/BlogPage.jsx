import { useState, useEffect } from "react";

import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
import Advertising from "../components/Advertising";
import TastyRecipes from "../components/TastyRecipes";

import "./BlogPage.css";

export default function BlogPage() {
  const [itens, setItens] = useState([]);
  const [itensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setCurrentItems] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("../../../database.json")
        .then((resp) => resp.json())
        .then((data) => data.articles);

      setCurrentItems(result.slice(0,itensPerPage))
      setItens(result);
    };
    fetchData();
  }, []);
  
  function handlePageChange(page){
    const startIndex = page * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    setCurrentItems(itens.slice(startIndex, endIndex));
    setCurrentPage(page)
  }

  return (
    <>'
      <ArticleList dataPagination={currentItens}/>
      <Pagination sendPage={handlePageChange}/>
      <Advertising />
      <TastyRecipes />
    </>
  );
}
