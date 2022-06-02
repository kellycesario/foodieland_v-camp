import { useEffect, useState } from "react";
import './style.css'

import MainButton from "../MainButton";

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
          <div className="articleListBox">
              <img className="articleListBox__recipeImg" src={itens.image} />
              <div className="articleListBox__descriptions">
              <h2 className="articleListBox__title" >{itens.title}</h2>
              <p className="articleListBox__recipeDescrip">{itens.summary}</p>

              <div className="articleListBox__publicationDescript">
              <img className="articleListBox__publicationDescript--authorImg" src={itens.authorImg} />
              
              <div className="articleListBox__namesAndDates">
              <p className="articleListBox__namesAndDates--authorName">{itens.author}</p>
              <p className="articleListBox__namesAndDatest--pubDate">{itens.created_at}</p>
              </div>  
                  
              </div>              

              </div>
                
          </div>
        
      ))}
      <section className="buttonArea">
        <div className="buttons__mobile">
          <MainButton
          Content={1} 
          value={0} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light" 
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>

          <MainButton 
          Content={2} 
          value={1} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light"
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>

          <MainButton 
          Content={3} 
          value={2} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light" 
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>
        </div>

        <div className="buttons__desktop">
          <MainButton
          Content={4} 
          value={3} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light" 
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>

          <MainButton 
          Content={5} 
          value={4} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light"
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>

          <MainButton 
          Content="..." 
          value={5} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light" 
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>

          <MainButton 
          Content=">"
          value={6} 
          Size = "tiny" 
          Color="light" 
          className="btn--tiny btn--light" 
          onClick={(e) => setCurrentPage(Number(e.target.value))}/>
        </div>
      </section>
    </>
  );
};

export default Pagination;