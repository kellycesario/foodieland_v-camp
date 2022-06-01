import './SearchBlogAndArticle.css'

export default function SearchBlogAndArticle() {
  return (
    <>
      <form className="form">
        <h1 className="form__title">Blog & Article</h1>
        <p className="form__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor=""></label>
          <input className="inputContainer__input" type="text" />
          <button className="inputContainer__btn">Subscribe</button>
        </div>
      </form>
    </>
  );
}
