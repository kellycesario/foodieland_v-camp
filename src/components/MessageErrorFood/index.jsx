import React from "react";
import errorFood from "../../../public/assets/img/errorFood.png";
import './style.css'

const MessageErrorFood = () => {
  return (
    <>
    <div className="MessageErrorBox">       
            <h1 className="MessageErrorBox_Text--red">Error 404</h1>
            <p className="MessageErrorBox_Text--bold">Desculpe! Ainda estamos trabalhando nesta página!</p>        
      <div className="MessageErrorBox__Image">
            <img src={errorFood} />
      </div>
    </div>
      
    </>
  );
};

export default MessageErrorFood;
