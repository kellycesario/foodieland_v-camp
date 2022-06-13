import React from "react";
import errorFood from "@img/errorFood.png";
import './style.css'

const MessageErrorFood = () => {
  return (
    <>
    <div className="messageErrorBox">       
            <h1 className="messageErrorBox_text--red">Error 404</h1>
            <p className="messageErrorBox_text--bold">Desculpe! Ainda estamos trabalhando nesta página!</p>        
      <div className="messageErrorBox__image">
            <img src={errorFood} />
      </div>
    </div>
      
    </>
  );
};

export default MessageErrorFood;
