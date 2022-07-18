import printer from '@icons/printer.svg';
import share from '@icons/share.svg';
import line from '@icons/line.svg';
import timer from '@icons/timer.svg';
import forkKnife from '@icons/forkKnife.svg';
import JohnSmith from '@img/johnSmithLogo.png';
import RecipeVideo from '@img/recipeDetails-video.png'

import './style.scss'

import NutriInformation from '@molecules/nutritioninformation'

const RecipeDetails = () => {
    return (
        <section className="recipeDetails">
            
            <h2 className="recipeDetails__title">Health Japanese Fried Rice</h2>
        
        <div className="recipeDetails__infoItems">
            <img src={JohnSmith} />
            <p>John Smith</p>
            <p> 15 March 2022</p>
            <img src={line} />
            
            <img src={timer} />
            <p>Prep Time</p>
            <p>15 Minutes</p>
            <img src={line} />

            <img src={timer} />
            <p>Cook Time</p>
            <p>15 Minutes</p>
            <img src={line} />

            <img src={forkKnife} />
            <p>Chicken</p>
        </div>

        <div className="recipeDetails__share">
            <img src={printer} /> 
            <p>Print</p>
            <img src={share} /> 
            <p>Share</p>
        </div>

        <div className="recipeDetails__videoArea">
            <img className="recipeDetails__video" src={RecipeVideo} />
            <NutriInformation />
        </div>

        <p>Lorem ipsum dolor sit amet, 
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

        </section>
    );
}

export default RecipeDetails;