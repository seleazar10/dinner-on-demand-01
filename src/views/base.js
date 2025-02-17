//add style that are re-usable

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    loadingPic: document.querySelector('.loadbox'),
    searchResPages: document.querySelector('.results__pages'),
    recipeBox: document.querySelector('.recipeBox'),
    recipe: document.querySelector('.recipe'),
    spinner: document.querySelector('.spinn'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')

};

export const renderLoader = parent => {
    parent.style.display = "block";
}

export const clearLoader = (parent) => {
    parent.style.display = "none";
}