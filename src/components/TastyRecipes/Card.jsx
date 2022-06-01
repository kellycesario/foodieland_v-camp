import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer__card">
      <img src={props.img} className="cardContainer__img" />
      <div className="cardContainer__group">
        <p className="cardContainer__text">{props.text}</p>
        <p className="cardContainer__author">{props.author}</p>
      </div>
    </div>
  );
};

export default Card;