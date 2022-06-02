import { useEffect } from "react";
import ArticleCards from "./ArticleCard";

export default function ArticleList({ dataPagination }) {
  useEffect(()=>{
   console.log(dataPagination);   
  },[dataPagination])
  
  return (
    <>
      <h1>ArticleList</h1>
      {dataPagination.map((article) => 
        <ArticleCards
          image={article.image}
          title={article.title}
          summary={article.summary}
          authorImg={article.authorImg}
          author={article.author}
          created_at={article.created_at}
        />
    )}
    </>
  );
}
