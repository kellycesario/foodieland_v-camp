import "./style.scss"

import elipse from "@img/Ellipse 4.png";
import heart from "@icons/heart.svg";

const LikeButton = () => {

  const handleClick = (e) => {
    e.target.classList.toggle("moreRecipesLikeButton__heart--active")
  }

  return (
    <div className="moreRecipesLikeButton">
      <img src={elipse} className="moreRecipesLikeButton__elipse" />
      <img onClick={handleClick} src={heart} className="moreRecipesLikeButton__heart" />
    </div>
  );
};

export default LikeButton;
