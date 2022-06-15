import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";

import styles from "./style.module.css";

export default function FeaturedRecipe() {
  return (
    <>
      <div className={styles.mainContainer}>
        <button className={styles.mainContainer__btnLeft + " btn btn--light btn--rounded btn--tiny"}>
          <img src={ArrowLeft} alt="" />
        </button>
        <ul className={styles.mainContainer__list}>
          <li className={styles.mainContainer__item}>
            <FeaturedRecipeCard />
          </li>
          <li className={styles.mainContainer__item}>
            <FeaturedRecipeCard />
          </li>
          <li className={styles.mainContainer__item}>
            <FeaturedRecipeCard />
          </li>
        </ul>
        <button className={styles.mainContainer__btnRight + " btn btn--light btn--rounded btn--tiny"}>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </>
  );
}
