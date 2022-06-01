import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer__card">
      <img src={props.img} />
      <p>{props.text}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default Card;
