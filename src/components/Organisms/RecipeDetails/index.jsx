import NutriInformation from '@molecules/nutritioninformation'
import RecipeDirections from '@molecules/RecipeDirections'
import RecipeInformation from '@molecules/recipeinformation'
import RecipeIngredients from '@molecules/RecipeIngredients'

import RecipeList from "@temp/RecipeList";

import RecipeVideo from '@img/recipeDetails-video.png'

import './style.scss'

const RecipeDetails = () => {
    return (
        <section className="recipeDetails">            
            <h2 className="recipeDetails__title">Health Japanese Fried Rice</h2>
            
            <RecipeInformation />    
                
            <div className="recipeDetails__visualArea">
                <img className="recipeDetails__video" src={RecipeVideo} />
                <NutriInformation />
            </div>

            <p className="recipeDetails__endingText">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim 
                id est laborum.
            </p>

            <div className="recipeDetails__wrapperSection">
                <RecipeIngredients />
                <RecipeList />
            </div>

            <RecipeDirections />

        </section>
    );
}

export default RecipeDetails;