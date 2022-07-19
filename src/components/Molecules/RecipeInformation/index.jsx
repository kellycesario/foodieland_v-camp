import printer from '@icons/printer-bg.svg';
import share from '@icons/share-bg.svg';
import line from '@icons/line.svg';
import timer from '@icons/timer.svg';
import utensils from '@icons/forkKnife.svg';
import JohnSmith from '@img/johnSmithLogo.png';

import './style.scss'

const RecipeInformation = () => {
    return(
        <section className="recipeInformation">

            <div className="recipeInformation__printAndShare">
                <img className="recipeInformation__printerPicture" src={printer} /> 
                <p className="recipeInformation__printer">Print</p>
                <img className="recipeInformation__sharePicture" src={share} /> 
                <p className="recipeInformation__share">Share</p>
            </div>

            <div className="recipeInformation__container">
                <img className="recipeInformation__authorIcon" src={JohnSmith} />
                <p className="recipeInformation__nameAuthor">John Smith</p>
                <p className="recipeInformation__date"> 15 March 2022</p>
                <img className="recipeInformation__authorLine" src={line} />
                
                <img className="recipeInformation__timerPrepPicture" src={timer} />
                <p className="recipeInformation__prepTime">Prep Time</p>
                <p className="recipeInformation__prepDuration">15 Minutes</p>
                <img className="recipeInformation__prepLine" src={line} />

                <img className="recipeInformation__timerCookPicture" src={timer} />
                <p className="recipeInformation__cookTime">Cook Time</p>
                <p className="recipeInformation__cookDuration">15 Minutes</p>
                <img className="recipeInformation__cookLine" src={line} />

                <img className="recipeInformation__utensilsPicture" src={utensils} />
                <p className="recipeInformation__meatType">Chicken</p>
            </div>

        </section>
    );
}

export default RecipeInformation;
