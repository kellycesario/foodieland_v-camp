import './style.scss'
import line from '@icons/horizontalLine.svg';

const NutriInformation = ()  => {
    return(
        <div className="nutriInformation">
            <p className="nutriInformation__title">Nutrition Information</p>
        
        <div className="nutriInformation__contents">
            <span className="nutriInformation__item">Calories</span>
            <span className="nutriInformation__info">219.9 kcal</span>
            <img src={line} />
            
            <span className="nutriInformation__item">Total Fat</span>
            <span className="nutriInformation__info">10.7 g</span>
            <img src={line} />
            
            <span className="nutriInformation__item">Protein</span>
            <span className="nutriInformation__info">7.9 g</span>
            <img src={line} />
            
            <span className="nutriInformation__item">Carbohydrate</span>
            <span className="nutriInformation__info">22.3 g</span>
            <img src={line} />
            
            <span className="nutriInformation__item">Cholesterol</span>
            <span className="nutriInformation__info">37.4 mg</span>
            <img src={line} />
            </div>
            
            <p className="nutriInformation__text">adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. </p>
        </div>
    );
}

export default NutriInformation;
