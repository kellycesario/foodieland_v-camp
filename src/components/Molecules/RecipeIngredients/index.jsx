import largeLine from '@icons/line-large.svg'

import './style.scss'

const RecipeIngredients = () => {
    return(
        <section className="recipeIngredients">
            <h3 className="recipeIngredients__title"> Ingredients </h3>
            <h4 className="recipeIngredients__mainDish"> For main dish </h4>
            <fieldset className="recipeIngredients__fieldset">
                <div className="recipeIngredients__checkboxArea">
                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />
                </div>
            </fieldset>

            <h4 className="recipeIngredients__sauce"> For the sauce</h4>

            <fieldset className="recipeIngredients__fieldset">
                <div className="recipeIngredients__checkboxArea">
                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />

                    <label className="recipeIngredients__label">
                        <input type="checkbox" id="checkbox" className="recipeIngredients__checkbox"/>
                        <span for="checkbox" className="recipeIngredients__item"> 
                        Lorem ipsum dolor sit amet </span>
                    </label>
                    <img className="recipeIngredients__breakLine" src={largeLine} />
                </div>
            </fieldset>
        </section>
    );
}

export default RecipeIngredients;