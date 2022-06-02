import ArticleCards from "./ArticleCard";
import Noodles from "../../../public/assets/img/recipe15.png";
import Wade from "../../../public/assets/img/wadeWarren.png"

export default function ArticleList() {
    return (
        <>
        <h1>ArticleList</h1>
        <ArticleCards 
        image={Noodles}
        title="Crochet Projects for Noodle Lovers"
        summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ipsum pariatur recusandae debitis culpa, temporibus repellendus tempore vel itaque laborum omnis!"
        authorImg={Wade}
        author="Wade Warren"
        created_at="12 November 2021"
        />
        
        </>
    )
}