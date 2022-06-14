import React, { useState, useEffect, useRef } from "react";
import database from "../../../../database.json";

const MainCarrousel = () => {
    const carrousel = useRef(null);

    const nextSlide = () => {
        carrousel.current.scrollBy(340, 0);
       
    }

    const previousSlide = () => {
        carrousel.current.scrollBy(-340, 0);
        
    }

    return (
        <>
            <div ref={carrousel}>
                {database.props.list.map((props, index) => {
                    return(
                        <div className="globalCarrousel" key={index}>
                            <img src={props.leftArrow} onClick={previousSlide}/>
                            <h1>{props.mainTitle}</h1>
                            <h2>{props.secondaryTitle}</h2>
                            <p>{props.description}</p>
                            <img src={props.mainImage} />
                            <img src={props.secondaryImage}/>
                            <img src={props.rightArrow} onClick={nextSlide}/>
                        </div>
                    )
                })}
            </div>
        </>
    )

}

export default MainCarrousel