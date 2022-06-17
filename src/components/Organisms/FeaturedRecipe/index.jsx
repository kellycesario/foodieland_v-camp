import { useRef } from "react";

import FeaturedRecipeCard from "@molecules/FeaturedRecipeCard";
import ArrowLeft from "@icons/arrowLeft.svg";
import ArrowRight from "@icons/arrowRight.svg";
import MainButton from "@atoms/MainButton";

import styles from "./style.module.css";

export default function FeaturedRecipe() {
  const carrouselRef = useRef(null);

  function scrollLeft() {
    carrouselRef.current.scrollBy(-350, 0);
  }

  function scrollRight() {
    carrouselRef.current.scrollBy(350, 0);
  }

  /*
  el.scrollBy
  Para descobrir coordenadas utilizar
  
  evento de rolagem
  
  Element.clientWidth
  Element.scrollLeft
  Element.scrollWidth
  */
  return (
    <>
      <div className={styles.mainContainer}>
        <MainButton
          handleClick={scrollLeft}
          Size={"tiny"}
          Color={"light"}
          Type={"rounded"}
          Content={"<"}
        />
        <ul ref={carrouselRef} className={styles.mainContainer__list}>
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
        <MainButton
          handleClick={scrollRight}
          className={styles.mainContainer__btnLeft}
          Size={"tiny"}
          Color={"light"}
          Type={"rounded"}
          Content={">"}
        />
      </div>
    </>
  );
}
