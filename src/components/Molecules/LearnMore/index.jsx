import React from "react";
import MainButton from "../../Refactor/MainButton"
import "./style.css";
import imgLearnMore from "@img/imgLearnMore.png";

const LearnMore = () => {

    return (
        <section className="learnMore">
            <h1 className="learnMore__title">Everyone can be a chef in their own kitchen</h1>
            <p className="learnMore__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqut enim ad minim</p>
            <img src={imgLearnMore} className="learnMore__img" aria-label="Chef pointing to a plate and some ingredients are displayed on screen" />
            <MainButton />
        </section>
    );
}

export default LearnMore;