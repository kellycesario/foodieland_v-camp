import { useEffect, useState } from "react";
import MainButton from "@temp/MainButton";
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
          <MainButton
            Content={1}
            Value={0}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
          <MainButton
            Content={2}
            Value={1}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
          <MainButton
            Content={3}
            Value={2}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
          <MainButton
            Content={4}
            Value={3}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
          <MainButton
            Content={5}
            Value={4}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
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
