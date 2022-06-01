import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer__card">
      <img src={props.img} className="cardContainer__article--img"/>
      <p className="cardContainer__article--title">{props.text}</p>
      <p className="cardContainer__article--author">{props.author}</p>
    </div>
  );
};

export default Card;