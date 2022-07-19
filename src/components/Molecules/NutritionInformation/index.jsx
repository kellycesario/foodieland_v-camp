import './style.scss'
import line from '@icons/horizontalLine.svg';

const NutriInformation = ()  => {
    return(
        <div className="nutriInformation">
            <p className="nutriInformation__title">Nutrition Information</p>
        
        <ul className="nutriInformation__contents">
            <li className="nutriInformation__item">Calories</li>
            <li className="nutriInformation__info">219.9 kcal</li>
            <img className="nutriInformation__breakLine" src={line} />
          
            <li className="nutriInformation__item">Total Fat</li>
            <li className="nutriInformation__info">10.7 g</li>
            <img className="nutriInformation__breakLine" src={line} />
            
            <li className="nutriInformation__item">Protein</li>
            <li className="nutriInformation__info">7.9 g</li>
            <img className="nutriInformation__breakLine" src={line} />
            
            <li className="nutriInformation__item">Carbohydrate</li>
            <li className="nutriInformation__info">22.3 g</li>
            <img className="nutriInformation__breakLine" src={line} />
            
            <li className="nutriInformation__item">Cholesterol</li>
            <li className="nutriInformation__info">37.4 mg</li>
            <img className="nutriInformation__breakLine" src={line} />
        </ul>
            
            <p className="nutriInformation__text">adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. </p>

        </div>
    );
}

export default NutriInformation;
