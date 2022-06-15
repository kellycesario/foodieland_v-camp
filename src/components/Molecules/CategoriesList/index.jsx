import React, { useRef } from "react";
import database from "../../../../database.json";
import smallLeftArrow from "@img/smallLeftArrow.png";
import smallRightArrow from "@img/smallRightArrow.png";    
import "./style.scss";
// import CategoriesCards from "../../Atoms/CategoriesCards";



// importando as imagens dos alimentos
// import sushiRice from "@img/sushiRice.png";
// import lettuce from "@img/lettuce.png";
// import steakRaw from "@img/steakRaw.png";
// import cakePiece from "@img/cakePiece.png";
// import sanduich from "@img/sanduich.png";
// import chocolateBar from "@img/chocolateBar.png";

// importando o fundo das imagens
// import sushiRiceBackground from "@img/sushiRiceBackground.png";
// import lettuceBackground from "@img/lettuceBackground.png";
// import steakRawBackground from "@img/steakRawBackground.png";
// import cakePieceBackground from "@img/cakePieceBackground.png";
// import sanduichBackground from "@img/sanduichBackground.png";
// import chocolateBarBackground from "@img/chocolateBarBackground.png";



const CategoriesList = () => {
    const slide = useRef(null);

    const nextSlide = () => {
        slide.current.scrollBy(340, 0);
        
    }

    const previousSlide = () => {
        slide.current.scrollBy(-340, 0);
        
    }

    return (
        <div className="slider">
            <img className="leftArrow" src={smallLeftArrow} onClick={previousSlide}/>
            <div className="slider__categoriesList" ref={slide}>
                {database.categoriesList.map((props, index) => {
                    return (
                        <>
                        <div className="sliderLogic" key={index}>                           
                            <div className="foodBackground">
                                <img className="foodSymbol" src={props.foodSymbol} />
                                <h3 className="foodName">{props.title}</h3>
                            </div>         
                        </div>
                        </>
                    )
                })}

            </div>
            <img className="rightArrow" src={smallRightArrow} onClick={nextSlide}/>    

        </div>
    )
}

            {/* <CategoriesCards
                foodSymbol = {sushiRice}
                foodBackground = {sushiRiceBackground}
                title= "Breakfest"
            />
            <CategoriesCards
                foodSymbol = {lettuce}
                foodBackground = {lettuceBackground}
                title= "Vegan"
            />
            <CategoriesCards
                foodSymbol = {steakRaw}
                foodBackground = {steakRawBackground}
                title= "Meat"
            />
            <CategoriesCards
                foodSymbol = {cakePiece}
                foodBackground = {cakePieceBackground}
                title= "Dessert"
            />
            <CategoriesCards
                foodSymbol = {sanduich}
                foodBackground = {sanduichBackground}
                title= "Lunch"
            />
            <CategoriesCards
                foodSymbol = {chocolateBar}
                foodBackground = {chocolateBarBackground}
                title= "Chocolate"
            /> */}
   
export default CategoriesList