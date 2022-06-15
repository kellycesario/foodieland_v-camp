import { useEffect, useState } from "react";
import "./style.css";

const Pagination = ({ sendPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  function handleClick(e) {
    setCurrentPage(Number(e.target.value));
    sendPage(Number(e.target.value));
  }

  return (
    <>
      <div className="paginationContainer">
        <div className="paginationContainer__buttonList">
          {/* Mapear MainButton pra renderizar o suficiente pra qtd de pagina */}
          {/* Mais as condicionais pra caso nao caiba na tela */}
          <button className="btn btn--tiny btn--light" onClick={handleClick} value={0}>1</button>
          <button className="btn btn--tiny btn--light" onClick={handleClick} value={1}>2</button>
          <button className="btn btn--tiny btn--light" onClick={handleClick} value={2}>3</button>
          <button className="btn btn--tiny btn--light" onClick={handleClick} value={3}>4</button>
          <button className="btn btn--tiny btn--light" onClick={handleClick} value={4}>5</button>
          {/* Definir quais botões que vao ficar */}
          {/* Criar funcao para caso tenha mais paginas mostrar num mini modal */}

          {/* <MainButton Content={"..."} Value={""} Size="tiny" Color="light" /> */}

          {/* Transformar em carousel para ao clicar na seta trocar as opcoes de pagina */}

          {/* <MainButton Content={">"} value={""} Size="tiny" Color="light" /> */}
        </div>
      </div>
    </>
  );
};

export default Pagination;
