import "./style.css";

const ArticleCards = (props) => {
  return (
    <div className="articleCard">
      <img className="articleCard__recipeImg" src={props.image} />
      <div className="articleCard__descriptions">
        <h2 className="articleCard__title">{props.title}</h2>
        <p className="articleCard__recipeDescrip">{props.summary}</p>

        <div className="articleCard__publicationDescript">
          <img
            className="articleCard__publicationDescript--authorImg"
            src={props.authorImg}
          />

          <div className="articleCard__namesAndDates">
            <p className="articleCard__namesAndDates--authorName">
              {props.author}
            </p>
            <p className="articleCard__namesAndDatest--pubDate">
              {props.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
