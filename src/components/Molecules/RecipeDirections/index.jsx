import largeLine from '@icons/line-large.svg'
import directionsImage from '@img/directions-image.png'

import './style.scss'

const RecipeDirections = () => {
    return(
        <section className="recipeDirections">
            <h3 className="recipeDirections__title"> Directions </h3>
            
            <fieldset className="recipeDirections__fieldset">
                <div className="recipeDirections__checkboxArea">
                    <label className="recipeDirections__label">
                        <input type="checkbox" id="checkbox" className="recipeDirections__checkbox"/>
                        <span for="checkbox" className="recipeDirections__stepTitle"> 1. Lorem ipsum dolor sit amet </span>
                    </label>
                    <p className="recipeDirections__text"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                
                <img src={directionsImage} className="recipeDirections__image"/>
                <p className="recipeDirections__text"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        dolore magnam aliquam quaerat voluptatem.</p>
                <img src={largeLine} className="recipeDirections__breakLine" />

                <div className="recipeDirections__checkboxArea">
                    <label className="recipeDirections__label">
                        <input type="checkbox" className="recipeDirections__checkbox" />
                        <span for="stepTwo" className="recipeDirections__stepTitle"> 2. Lorem ipsum dolor sit amet </span>
                    </label>
                    <p className="recipeDirections__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        dolore magnam aliquam quaerat voluptatem.</p>
                    <img src={largeLine} className="recipeDirections__breakLine"/>
                </div>

                <div className="recipeDirections__checkboxArea">
                    <label className="recipeDirections__label">
                        <input type="checkbox" className="recipeDirections__checkbox" />
                        <span for="stepThree" className="recipeDirections__stepTitle"> 3. Lorem ipsum dolor sit amet </span>
                    </label>
                    <p className="recipeDirections__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        dolore magnam aliquam quaerat voluptatem.</p>
                    <img src={largeLine} className="recipeDirections__breakLine" />
                </div>
            </fieldset>
        </section>
    );
}

export default RecipeDirections;