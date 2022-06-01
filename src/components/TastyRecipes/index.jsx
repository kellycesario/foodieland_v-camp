import Card from "./Card";

import "./index.css";

import meat from "../../../public/assets/img/tastyrecipes(1).png";
import pasta from "../../../public/assets/img/tastyrecipes(2).png";
import pork from "../../../public/assets/img/tastyrecipes(3).png";

export default function TastyRecipes() {
  return (
    <div className="cardContainer">
      <h2 className="cardContainer__title">Tasty Recipes</h2> 
      <Card
        img={meat}
        text="Chicken Meatballs with 
        Cream Cheese "
        author="By Andreas Paula"
      />
      <Card
        img={pasta}
        text="Traditional Bolognaise Ragu"
        author="By Andreas Paula"
      />
      <Card
        img={pork}
        text="Pork and Chive chinese Dumplings"
        author="By Andreas Paula"
      />
    </div>
  );
}
