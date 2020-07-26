//add style that are re-usable

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    loadingPic: document.querySelector('.loadbox'),
    searchResPages: document.querySelector('.results__pages'),
    recipeBox: document.querySelector('.recipeBox'),
    recipe: document.querySelector('.recipe')

};

export const renderLoader = parent => {
    parent.style.display = "inline-block";
}

export const clearLoader = (parent) => {
    parent.style.display = "none";
}