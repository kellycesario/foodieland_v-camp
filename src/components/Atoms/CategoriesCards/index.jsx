import React from "react";
import database from "../../../../database.json";
import "./style.scss";

const CategoriesFoodImage = () => {
    return (
        <>
            {database.categoriesList.map((props) => {
                <img className="foodSymbol" src={props.foodSymbol} />
            })}
        </>
    )
} 

export default CategoriesFoodImage;