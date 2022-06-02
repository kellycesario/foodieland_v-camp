import { useEffect, useState } from "react";
import MainButton from "../MainButton";
import './style.css'

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
          <MainButton Content={1} value={0} Size="tiny" Color="light" />
          <MainButton Content={2} value={1} Size="tiny" Color="light" />
          <MainButton Content={3} value={2} Size="tiny" Color="light" />
          <MainButton Content={4} value={2} Size="tiny" Color="light" />
          <MainButton Content={5} value={2} Size="tiny" Color="light" />
          <MainButton Content={'...'} value={2} Size="tiny" Color="light" />
          <MainButton Content={'>'} value={2} Size="tiny" Color="light" />
        </div>
      </div>
    </>
  );
};

export default Pagination;
