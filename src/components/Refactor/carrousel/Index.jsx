import React, { useState, useEffect, useRef } from 'react';
import { ImgSlider } from './SliderImg';
import './style.css'
import ArrowLeft from '@icons/arrowLeft.svg';
import ArrowRight from '@icons/arrowRight.svg';
import Heart from '@icons/heart.svg';
import Ellipse from '@img/Ellipse 4.png'

const CarrouselFood = () => {
    const carroussel = useRef(null);
    const [foodSlide, setFoodSlide] = useState(0);
    const [heartColor, setHeartColor] = useState(false);
    const slideLength = ImgSlider.length;

    const nextSlide = () => {
        carroussel.current.scrollBy(340, 0);
        // setFoodSlide(foodSlide === slideLength - 1 ? 0 : foodSlide + 1);
    }

    const previousSlide = () => {
        carroussel.current.scrollBy(-340, 0);
        // setFoodSlide(foodSlide === 0 ? slideLength - 1 : foodSlide - 1);
    }

    const changeHeartColor = () => {
        setHeartColor(!heartColor);
        
    }


    useEffect(() => {
        setFoodSlide(0)
    }, [])

    return (
        <div className='carrossel'> 
            <div className='carrossel__Title'><h1>Checkout the delicious recipe</h1></div>
            <div className='carrossel__Container'> 
                <div className='left__Arrow'><img src={ArrowLeft} onClick={previousSlide} className='prev'/></div>

                <div className='carrossel__Slides__Food' ref={carroussel}>
                { ImgSlider.map((slide, index) => {
                return(
                    <div className='logica' key={index}>
                        <div className="like__button">
                            <img src={Ellipse} className='ellipse' />
                            <img src={Heart} onClick={changeHeartColor} className={heartColor ? "red__heart" : "default__heart" }/>
                         </div>
                        
                            <>
                            
                            <img src={slide.image} alt="Imagens" className='carrossel__Food__Img' />
                            <div className='content'>
                                <h2>{slide.heading}</h2>
                            </div>
                            <div className='carrossel__Descriptions'>
                            <img src={slide.timer} className='clock__Icon'/>
                            <p className='clock__Descript'>{slide.timing}</p>
                            <img src={slide.fork} className='fork__Icon'/>
                            <p className='fork__Descript'>{slide.prepare}</p>
                            </div>
                            
                            </>
                        
                    </div>
                )
            })}
                </div>
                <div className='right__Arrow' onClick={nextSlide} ><img src={ArrowRight}  className='next'/></div>                
            </div>           
            
           
        </div>
    );
};

export default CarrouselFood;