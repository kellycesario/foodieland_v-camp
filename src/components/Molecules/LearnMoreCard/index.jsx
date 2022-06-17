import React from "react";
import styles from "./style.module.scss";
import imgLearnMore from "@img/imgLearnMore.png";

const LearnMoreCard = () => {

    return (
        <section className={styles.learnMore}>
            <h1 className={styles.learnMore__title}>Everyone can be a chef in their own kitchen</h1>
            <p className={styles.learnMore__text}>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqut enim ad minim</p>
            <img src={imgLearnMore} className={styles.learnMore__img} aria-label="Chef pointing to a plate and some ingredients are displayed on screen" />
            <button className={styles.learnMore__button}>Learn More</button>
        </section>
    );
}

export default LearnMoreCard;