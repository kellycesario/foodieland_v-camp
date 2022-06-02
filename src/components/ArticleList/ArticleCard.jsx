import './style.css'

const ArticleCards = (props) => {
    return (
        <div className="articleListBox">
              <img className="articleListBox__recipeImg" src={props.image} />
              <div className="articleListBox__descriptions">
              <h2 className="articleListBox__title" >{props.title}</h2>
              <p className="articleListBox__recipeDescrip">{props.summary}</p>

              <div className="articleListBox__publicationDescript">
              <img className="articleListBox__publicationDescript--authorImg" src={props.authorImg} />
              
              <div className="articleListBox__namesAndDates">
              <p className="articleListBox__namesAndDates--authorName">{props.author}</p>
              <p className="articleListBox__namesAndDatest--pubDate">{props.created_at}</p>
              </div>  
                  
              </div>              

              </div>
                
          </div>
    )
}

export default ArticleCards