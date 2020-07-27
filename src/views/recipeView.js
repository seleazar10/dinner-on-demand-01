import { elements } from "./base";
import {Fraction} from "fractional";



export const clearResult = () =>{
    elements.recipe.innerHTML = " "
}

const formatCount = count =>{
    if(count){
        const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10))
        if  (!dec) return count;
        if(int === 0){
            const fr = new Fraction(count);
            return `${fr.numerator}/${fr.denominator}`;
        }else{
            const fr = new Fraction(count - int)
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
    }
    return "1"

}

const createIngredient = (eachIngredient)=> {

    const markupIngrd = 
    `    
        <li class="recipe__item">
            <i class="fa fa-check fa-2x"></i>

            <div class="recipe__count">${formatCount(eachIngredient.count)}</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">${eachIngredient.unit}</span>
                ${eachIngredient.ingredient}
            </div>
        </li>
    `
    // console.log(markupIngrd)

    return markupIngrd

}


export const dislayRecipe = chosenRecipe => {
    const markup =
        `
    <div class="recipeContainer"> 
            <figure class="recipe__fig">
                <img src="${chosenRecipe.img}" alt="${chosenRecipe.title}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${chosenRecipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <i class="fa fa-history fa-2x"></i>
                    <span class="recipe__info-data recipe__info-data--minutes">${chosenRecipe.time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <i class="fa fa-users fa-2x"></i>
                    <span class="recipe__info-data recipe__info-data--people">${chosenRecipe.servings}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny btn-decrease">
                        <i class="fa fa-minus-circle fa-2x"></i>
                        </button>
                        <button class="btn-tiny btn-increase"> 
                        <i class="fa fa-plus-circle fa-2x"></i>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                <i class="fa fa-heart fa-2x"></i>

                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
        
                ${chosenRecipe.ingredients.map(eachIngr => createIngredient(eachIngr)).join('')}

                </ul>

                <button class="btn-small recipe__btn  recipe__btn--add">
                <i class="fa fa-shopping-cart fa-2x"></i>

                    <span>Add to shopping list</span>
                </button>

            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${chosenRecipe.author}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${chosenRecipe.url}" target="_blank">
                    <span>Directions</span>
                    <i class="fa fa-angle-double-right fa-3x"></i>


                </a>
            </div>
            </div>
            
    `

    elements.recipe.insertAdjacentHTML('afterbegin', markup)
}

export const updateServingsIngredients = recipe =>{

    //update the serving
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;

    //update ingredients
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
        console.log(el)
    });

}