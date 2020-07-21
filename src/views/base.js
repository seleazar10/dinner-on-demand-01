//add style that are re-usable

import '../img/favicon.png'
import '../img/loading.png'


export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    loadingPic: document.querySelector('.loading_logo')
};

export const elementStrings ={
    //this is a class. it will be called as elementStringsloader
    loader: 'loader'
}

export const displayLoadingPic = () => {
    elements.loadingPic.style.display = "inline";

}


export const renderLoader = parent => {

    parent.style.display = "inline";

    // //html markup ----------------//
    // const loader =`
    //     <div class="${elementStrings.loader}">
    //     <img src=".././img/loading.png" alt="loading" class="loading_logo">
    //     </div?
    // `;
    // parent.insertAdjacentHTML('afterbegin', loader)
}


export const clearLoader = ()=>{

    elements.loadingPic.style.display = "none";

    // //Remove loading icon completely --------------//
    // const loader = document.querySelector(`.${elementStrings.loader}`);
    // if(loader){
    //     loader.parentNode.removeChild(loader)
    // }
}