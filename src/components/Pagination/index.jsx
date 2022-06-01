import { useEffect, useState } from "react";

const Pagination = () => {
  const [itens, setItens] = useState([]);
  const [intensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * intensPerPage;
  const endIndex = startIndex + intensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("../../../database.json")
        .then((resp) => resp.json())
        .then((data) => data.articles);

      setItens(result);
    };
    fetchData();
  }, []);
  

  return (
    <>
      {currentItens.map((itens) => (
        <div>{itens.title}</div>
      ))}
      <div className="Buttons">
        <button
          value="0"
          onClick={(e) => setCurrentPage(Number(e.target.value))}
        >
          1
        </button>
        <button
          value="1"
          onClick={(e) => setCurrentPage(Number(e.target.value))}
        >
          2
        </button>
        <button
          value="2"
          onClick={(e) => setCurrentPage(Number(e.target.value))}
        >
          3
        </button>
      </div>
    </>
  );
};

export default Pagination;
