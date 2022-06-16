import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";
import MainButton from "@atoms/MainButton";

import styles from "./style.module.css";

export default function FeaturedRecipe() {
  return (
    <>
      <div className={styles.mainContainer}>
        <MainButton className={styles.mainContainer__btnLeft} Size={'tiny'} Color={'light'} Type={'rounded'} Content={'<'} />
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
        <MainButton className={styles.mainContainer__btnLeft} Size={'tiny'} Color={'light'} Type={'rounded'} Content={'>'} />
      </div>
    </>
  );
}
