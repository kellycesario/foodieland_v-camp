import React, { useRef } from "react";
import database from "../../../../database.json";
import smallLeftArrow from "@img/smallLeftArrow.png";
import smallRightArrow from "@img/smallRightArrow.png";    
import "./style.scss";


const CategoriesList = () => {
    const slide = useRef(null);

    const nextSlide = () => {
        slide.current.scrollBy(400, 0);
        
    }

    const previousSlide = () => {
        slide.current.scrollBy(-400, 0);
        
    }

    return (
        <div className="slider">
            <img className="leftArrow" src={smallLeftArrow} onClick={previousSlide}/>
            <div className="slider__categoriesList" ref={slide}>
                {database.categoriesList.map((props, index) => {
                    return (
                        <>
                        <div className="sliderLogic" key={index}>                           
                            <div className= {`foodBackground ${props.backgroundStyle}`}>
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

   
export default CategoriesList