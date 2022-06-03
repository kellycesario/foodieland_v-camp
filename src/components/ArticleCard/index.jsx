import "./style.css";

const ArticleCards = (props) => {
  return (
    <div className="articleCard">
      <div className="articleCard__image">
        <img className="articleCard__recipeImg" src={props.image} />
      </div>
      <div className="articleCard__info">
        <h2 className="articleCard__title">{props.title}</h2>
        <p className="articleCard__recipeDescrip">{props.summary}</p>

        <div className="articleCard__publicationDescript">
          <img
            className="articleCard__publicationDescript--authorImg"
            src={props.authorImg}
          />

          <p className="articleCard__namesAndDates--authorName">
            {props.author}
          </p>
          <hr width="1" size="33" />
          <p className="articleCard__namesAndDatest--pubDate">
            {props.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;