import { useEffect, useState } from "react";
import MainButton from "../MainButton";
import "./style.css";

const Pagination = ({ sendPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  function handleClick(e) {
    setCurrentPage(Number(e.target.value));
    sendPage(Number(e.target.value));
  }

  return (
    <>
      <div className="buttonArea">
        <div className="buttonList">
          {/* Mapear MainButton pra renderizar o suficiente pra qtd de pagina */}
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
          <MainButton
            Content={"..."}
            Value={2}
            Size="tiny"
            Color="light"
            handleClick={handleClick}
          />
          <MainButton
            Content={">"}
            value={2}
            Size="large"
            Color="light"
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
