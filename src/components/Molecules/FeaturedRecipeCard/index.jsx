import style from "./style.module.css";

export default function FeaturedRecipeCard() {
  return (
    <>
      <div className={style.featuredRecipeCard}>
        <div className={style.featuredRecipeCard__leftContainer}></div>
        <div className={style.featuredRecipeCard__rightContainer}></div>
      </div>
    </>
  );
}
