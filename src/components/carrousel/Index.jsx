import React, { useState, useEffect } from 'react';
import { ImgSlider } from './SliderImg';
import ArrowLeft from '../../assets/icons/arrowLeft.svg';
import ArrowRight from '../../assets/icons/arrowRight.svg';
import Heart from '../../assets/icons/heart.svg';
import './style.css'

const CarrouselFood = () => {
    const [foodSlide, setFoodSlide] = useState(0);
    const [heartColor, setHeartColor] = useState(false);
    const slideLength = ImgSlider.length;

    const nextSlide = () => {
        setFoodSlide(foodSlide === slideLength - 1 ? 0 : foodSlide + 1);
    }

    const previousSlide = () => {
        setFoodSlide(foodSlide === 0 ? slideLength - 1 : foodSlide - 1);
    }

    const changeHeartColor = () => {
        if (heartColor === false){
            setHeartColor(true);
        } else {
            setHeartColor(false);
        }
        
    }


    useEffect(() => {
        setFoodSlide(0)
    }, [])

    return (
        <div className='carrossel'>
            <img src={ArrowLeft} onClick={previousSlide} className='prev'/>
            <img src={ArrowRight} onClick={nextSlide} className='next'/>
            <div className="elipse">
                <img src={Heart} onClick={changeHeartColor} className={heartColor ? "red_heart" : "" }/>
            </div>
            {ImgSlider.map((slide, index) => {
                return(
                    <div className={index === foodSlide ? "slide_current" : "slide" } key={index}>
                        {index === foodSlide && (
                            <>
                            
                            <img src={slide.image} alt="Imagens" className='foodImg' />
                            <div className='content'>
                                <h2>{slide.heading}</h2>
                            </div>
                            <div className='descriptions'>
                            <img src={slide.timer}/>
                            <p>{slide.timing}</p>
                            <img src={slide.fork}/>
                            <p>{slide.prepare}</p>
                            </div>
                            
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
};

export default CarrouselFood;