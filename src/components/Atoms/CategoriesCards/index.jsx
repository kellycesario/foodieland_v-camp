import React from "react";
import "./style.scss";


const CategoriesCards = (props) => {
    return (
        <div className="cardsProps">
            <img className="cardsProps__foodSymbol" src={props.foodSymbol} />
            <img className="cardsProps__foodBackground" src={props.foodBackground} />
            <p className="cardsProps__foodTitle">{props.title}</p>
        </div>
    )
}

export default CategoriesCards