import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";

import styles from "./style.module.css";

export default function FeaturedRecipe() {
  return (
    <>
      <div className={styles.mainContainer}>
        <button className="btn btn--light btn--rounded btn--tiny">
          <img src={ArrowLeft} alt="" />
        </button>
        <ul className={styles.mainContainer__list}>
          <li className={styles.mainContainer__item}>
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
          <li>
            <FeaturedRecipeCard />
          </li>
        </ul>
        <button className="btn btn--light btn--rounded btn--tiny">
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </>
  );
}
