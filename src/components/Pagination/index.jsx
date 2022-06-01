import { useEffect, useState } from "react";
import './style.css'

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
  console.log(itens);

  return (
    <>
      {currentItens.map((itens) => (
          <div className="articleListBox">
              <img className="articleListBox__recipeImg" src={itens.image} />
              <h2 className="articleListBox__title" >{itens.title}</h2>
              <p>{itens.summary}</p>
              <div className="articleListBox__descriptions">
              <img className="articleListBox__descriptions--authorImg" src={itens.authorImg} />
              <p className="articleListBox__descriptions--author">{itens.author}</p>
              <p className="articleListBox__descriptions--date">{itens.created_at}</p>    
              </div>
                
          </div>
        
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
