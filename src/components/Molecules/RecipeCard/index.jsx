import "./style.scss"
import LikeButton from "@atoms/LikeButton";
import fork from "@icons/forkknife.svg";
import clock from "@icons/timer.svg";


const RecipeCard = ({ img, txt, category }) => {
  return (
    <div className="moreRecipesCard">
      <LikeButton />
      <img src={img} className="moreRecipesCard__img" />
      <p className="moreRecipesCard__txt"> {txt}</p>
      <div className="moreRecipesCard__footer">
        <img src={clock} className="moreRecipesCard__clock" />
        <p className="moreRecipesCard__time">30 minutes</p>
        <img src={fork} className="moreRecipesCard__fork" />
        <p> {category}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
