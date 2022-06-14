import Card from "./Card";

import "./index.css";

import meat from "@img/tastyrecipes(1).png";
import pasta from "@img/tastyrecipes(2).png";
import pork from "@img/tastyrecipes(3).png";

export default function TastyRecipes() {
  return (
    <>
      <div className="cardContainer">
        <div className="cardContainer__title">
          <h2>Tasty Recipes</h2>
        </div>

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
    </>
  );
}
