import { useEffect } from "react";
import ArticleCards from "@temp/ArticleCard";
import "./style.css";

export default function ArticleList({ dataPagination }) {
  return (
    <>
      <div className="articleListContainer">
        {dataPagination.map((article) => (
          <ArticleCards
            image={article.image}
            title={article.title}
            summary={article.summary}
            authorImg={article.authorImg}
            author={article.author}
            created_at={article.created_at}
          />
        ))}
      </div>
    </>
  );
}
