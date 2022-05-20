import React, { useState, useEffect, useRef } from 'react';
import { ImgSlider } from './SliderImg';
import ArrowLeft from '../../../public/assets/icons/arrowLeft.svg';
import ArrowRight from '../../../public/assets/icons/arrowRight.svg';
import Heart from '../../../public/assets/icons/heart.svg';
import Ellipse from '../../../public/assets/img/Ellipse 4.png'
import './style.css'

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
            <div className='carrossel_title'><h1>Checkout the delicious recipe</h1></div>
            <div className='carrossel__container'> 
                <div className='leftArrow'><img src={ArrowLeft} onClick={previousSlide} className='prev'/></div>

                <div className='slidesFood' ref={carroussel}>
                { ImgSlider.map((slide, index) => {
                return(
                    <div className='logica' key={index}>
                        <div className="like__button">
                            <img src={Ellipse} className='ellipse' />
                            <img src={Heart} onClick={changeHeartColor} className={heartColor ? "red_heart" : "default_heart" }/>
                         </div>
                        
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
                        
                    </div>
                )
            })}
                </div>
                <div className='arrowRight' onClick={nextSlide} ><img src={ArrowRight}  className='next'/></div>                
            </div>           
            
           
        </div>
    );
};

export default CarrouselFood;