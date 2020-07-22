import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = " ";
};

export const clearResults = () => {
    elements.searchResList.innerHTML = " ";
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




const createButton = (page, type) => {

    const markupFirst = 
    `
        <button class="btn-inline results__btn--${type}" data-goto=${page +1}>

            <i class="fas fa-arrow-right"></i>
            <span>Page ${page +1}</span>

        </button>
    `
    return markupFirst


}

const createButtonBoth = (page) => {
    const markupBoth = 
    `
        <button class="btn-inline results__btn--prev" data-goto=${page -1}>
            <i class="fas fa-arrow-left"></i>
            <span>Page ${page - 1}</span>
        </button>
        <button class="btn-inline results__btn--next" data-goto=${page +1}>
            <i class="fas fa-arrow-right"></i>
            <span>Page ${page + 1}</span>
        </button>
    `
    return markupBoth
}




const renderButtons = (page, numResults, resPerPage) => {

    const pages = Math.ceil(numResults / resPerPage);
        console.log(pages)
        console.log(page)

    let button;

    if (page === 1 && pages > 1) {
        //only button to go to next page
        button = createButton(page, "next");
    } else if (page < pages) {
        //both buttons
        button = createButtonBoth(page)       
    }else if (page === pages && pages > 1) {
        //only button to go to prev page
        button = createButton(page, "prev");
    }
    elements.searchResPages.insertAdjacentHTML('beforeend', button)
}



export const renderResults = (recipes, page = 2, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    renderButtons(page, recipes.length, resPerPage);


}



// export const add = (a, b) => a + b;
// export const multiply = (a,b) =>a * b;
// export const ID = 23;