import "./style.scss"

import elipse from "@img/Ellipse 4.png";
import heart from "@icons/heart.svg";

const LikeButton = () => {
  return (
    <div className="moreRecipesLikeButton">
      <img src={elipse} className="moreRecipesLikeButton__elipse" />
      <img src={heart} className="moreRecipesLikeButton__heart" />
    </div>
  );
};

export default LikeButton;
