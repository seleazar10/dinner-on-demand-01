import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = " ";
    elements.searchInput.style.boxShadow = "5px 5px #f7ab85"

};

export const clearResults = () => {
    elements.searchResList.innerHTML = " ";
    elements.searchResPages.innerHTML = " ";
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
        console.log('class removed')
    })
    console.log(id)
    let newId = parseFloat(id)
    console.log(typeof(newId))
    document.querySelector(`.results__link[href*='${newId}']`).parentElement.classList.add('results__link--active');
    console.log('yup')
};




//display recipes on screen
//function to now let title run over
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        console.log(title.split(' '))
        title.split(' ').reduce((acc, cur) => {
            // console.log(acc)
            // console.log(cur)
            if (acc + cur.length <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}


const renderRecipe = recipe => {
    const markup = `
    <div class="recipeBox">
                <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    </div>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
};




const createButton = (page, type) => {

    let goToThisPage, arrDirect;
    if(type ==="prev"){
        goToThisPage = page - 1;
        arrDirect = "left";
    }else{
        goToThisPage = page + 1;
        arrDirect = "right";
    }

    const markupFirst = 
    `
        <button class="btn-inline results__btn--${type}" data-goto=${goToThisPage}>

            
            <i class="fa fa-arrow-${arrDirect}"></i>
            <span>Page ${goToThisPage}</span>

        </button>
    `
    return markupFirst
}


const renderButtons = (page, numResults, resPerPage) => {

    const pages = Math.ceil(numResults / resPerPage);
        // console.log(pages)
        // console.log(page)

    let button;

    if (page === 1 && pages > 1) {
        //only button to go to next page
        button = createButton(page, "next");
    } else if (page < pages) {
        //both buttons       
        button = 
        `
        ${createButton(page, "next")}
        ${createButton(page, "prev")}
        `
    }else if (page === pages && pages > 1) {
        //only button to go to prev page
        button = createButton(page, "prev");
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
}



export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    renderButtons(page, recipes.length, resPerPage);


}



// export const add = (a, b) => a + b;
// export const multiply = (a,b) =>a * b;
// export const ID = 23;