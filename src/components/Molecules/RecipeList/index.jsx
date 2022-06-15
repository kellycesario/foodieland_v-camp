import RecipeCard from "@molecules/RecipeCard";
import img1 from "@img/article02.png";
import img2 from "@img/recipe01.png";
import img3 from "@img/friedRice.png";
import img4 from "@img/recipe11.png";
import img5 from "@img/recipe12.png";
import img6 from "@img/recipe13.png";
import img7 from "@img/recipe14.png";
import img8 from "@img/article01.png";
import "./style.scss"

const RecipeList = () => {
  return (
    <div className="moreRecipesImgList">
      <RecipeCard
        img={img1}
        txt="Mixed Tropical Fruit Salad with Superfood Boosts "
        category="Healthy"
      />
      <RecipeCard
        img={img2}
        txt="Big and Juicy Wagyu Beef Cheeseburger"
        category="Western"
      />
      <RecipeCard
        img={img3}
        txt="Healthy Japanese Fried Rice with Asparagus"
        category="Healthy"
      />
      <RecipeCard
        img={img4}
        txt="Cauliflower Walnut Vegetarian Taco Meat"
        category="Eastern"
      />
      <RecipeCard
        img={img5}
        txt="Rainbow Chicken Salad with Almond Honey Mustard Dressing"
        category="Healthy"
      />
      <RecipeCard
        img={img6}
        txt="Barbeque Spicy Sandwiches with Chips "
        category="Snack"
      />
      <RecipeCard
        img={img7}
        txt="Firecracker Vegan Lettuce Wraps - Spicy! "
        category="Seafood"
      />
      <RecipeCard
        img={img8}
        txt="Chicken Ramen Soup with Mushroom "
        category="Japanese"
      />
    </div>
  );
};

export default RecipeList;
