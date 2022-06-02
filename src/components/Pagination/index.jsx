import { useEffect, useState } from "react";
// import './style.css'

const Pagination = ({sendPage}) => {
  const [currentPage, setCurrentPage] = useState(0);

  function handleClick(e){
    setCurrentPage(Number(e.target.value))
    sendPage(Number(e.target.value))
  }
  

  return (
    <>
      <div className="Buttons">
        <button
          value="0"
          onClick={handleClick}
        >
          1
        </button>
        <button
          value="1"
          onClick={handleClick}
        >
          2
        </button>
        <button
          value="2"
          onClick={handleClick}
        >
          3
        </button>
      </div>
    </>
  );
};

export default Pagination;
