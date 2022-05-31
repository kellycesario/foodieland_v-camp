import { useEffect, useState } from "react";
import json from "../../../database.json";

const Pagination = () => {
  const [itens, setItens] = useState([]);
  const [intensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itens;
  const endIndex = startIndex + intensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(json)
        .then((result) => result.json())
        .then((data) => data);

      setItens(result);
    };
    fetchData()
  }, []);

  return (
    <div className="Buttons">
      <button onClick={(e) => setCurrentPage(Number(e.target.value))}>1</button>
      <button onClick={(e) => setCurrentPage(Number(e.target.value))}>2</button>
      <button onClick={(e) => setCurrentPage(Number(e.target.value))}>3</button>
    </div>
  );
};

export default Pagination;
