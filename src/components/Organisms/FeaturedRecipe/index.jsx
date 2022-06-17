import { useRef } from "react";

import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";
import MainButton from "@atoms/MainButton";

import styles from "./style.module.css";

export default function FeaturedRecipe() {
  return (
    <>
      <div className={styles.mainContainer}>
        <ul className={styles.mainContainer__list}>
          <li className={styles.mainContainer__item}>
            <FeaturedRecipeCard />
          </li>
        </ul>
      </div>
    </>
  );
}
