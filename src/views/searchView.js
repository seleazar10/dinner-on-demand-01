import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { 
    elements.searchInput.value = " ";
};

export const clearResults = () => {
    elements.searchResList.innerHTML = " ";
};

//function to now let title run over
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        console.log(title.split(' '))
        title.split(' ').reduce((acc, cur) => {
            // console.log(acc)
            // console.log(cur)
            if(acc + cur.length <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length;
        }, 0);
     return `${newTitle.join(' ')} ...`;
    }
    return title;
}

//display recipes on screen

const renderRecipe = recipe => {
    const markup = `
                <li>
                    <a class="results__link " href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
};

// export const renderResults = recipes => {
//     // console.log(recipes)
//     recipes.forEach(renderRecipe);;
// };

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);;


    
 }






// export const add = (a, b) => a + b;
// export const multiply = (a,b) =>a * b;
// export const ID = 23;