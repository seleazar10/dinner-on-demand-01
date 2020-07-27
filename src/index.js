import './styles/main.css';
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import { elements, renderLoader, clearLoader } from "./views/base";


/*
Global state of the app
- Search Object
- Current recipe object
- Shoping list object
- Liked recipes

*/

const state = {};

const controlSearch = async () => {
    console.log('control search async function called and started')
    // 1. get search from view
    const mySearch = searchView.getInput();
    console.log(mySearch);

    if (mySearch) {
        //2. new search object and add to state
        state.search = new Search(mySearch);


        //3. Prepare UI for result.   
        searchView.clearInput();
        searchView.clearResults();

        console.log(elements.searchRes)
        renderLoader(elements.loadingPic)


        try {

            //4. Search for recipes
            await state.search.getResults();

            //5. Render result in UI
            console.log("--------------------")
            console.log(state.search.result)
            console.log("--------------------")

            clearLoader(elements.loadingPic)
            searchView.renderResults(state.search.result)


        } catch (error) {
            console.log(`erro in search controller ${error}`)
            clearLoader(elements.loadingPic)

        }


    }
}


elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
    controlSearch()
})

elements.searchResPages.addEventListener('click', e => {

    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage)
    }

    

})


//recipe control

const controlRecipe = async () => {
    //get ID from URL
    const id = window.location.hash.replace("#", " ");
    console.log(id)
    console.log(typeof (id))

    if (id) {

        //prepare UI for chnages
        renderLoader(elements.spinner)

        // //highlight selected recipe
        // if (state.search) {
        //     await searchView.highlightSelected(id);
        // }


        //create new recipe object
        state.recipe = new Recipe(id)

        try {
            //get recipe data
            await state.recipe.getRecipe()
            await state.recipe.parseIngredients()

            //calucalate serving anf time
            await state.recipe.calcTime()
            await state.recipe.calcServings()
           
            //render recipe
            clearLoader(elements.spinner);
            await recipeView.clearResult()          
            await recipeView.dislayRecipe(state.recipe)

       


        } catch (err) {
            console.log(err)
            console.log('error on recipe controller')
        }

    }

}


// window.addEventListener('hashchange',  controlRecipe)
// window.addEventListener('load',  controlRecipe)
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


///List Controller
const controlList = () =>
{
    console.log('activated')
    //create a new list if there is none yet
    if(!state.list) state.list = new List()

    //add each ingredient to the list
    console.log( state.recipe.ingredients)
    state.recipe.ingredients.forEach(el =>{
        console.log(el.count, el.unit, el.ingredient)
       const item = state.list.addItem(el.count, el.unit, el.ingredient);
       listView.renderItemList(item)
    })
}
//handling recipe button clicks

elements.recipe.addEventListener('click', e=>{
    if(e.target.matches(".btn-decrease, .btn-decrease *")){

        if(state.recipe.servings>1){
        state.recipe.updateServings('dec')
        recipeView.updateServingsIngredients(state.recipe)
        console.log('dec')
        }

    }else if(e.target.matches(".btn-increase, .btn-increase *")){
        state.recipe.updateServings('inc') 
        recipeView.updateServingsIngredients(state.recipe)
        console.log('inc')


    }else if(e.target.matches(".recipe__btn--add, .recipe__btn--add *")){
        console.log('clicked')
        controlList()
        
    }
    // console.log(state.recipe)
    // return state.recipe
})

// window.l = new List()




















///======================PRACTICE=================================//////////////


// import {shout} from "./test" //1
// import string from "./models/Search" //2
// import {add, multiply, ID} from "./views/searchView"//3A
// import {add as a, multiply as m} from "./views/searchView" //3B
// import * as searchView from "./views/searchView" //3C


// console.log(shout('John')) //1
// console.log(string)     //2
// console.log(`to add: ${add(3, 4)} and to multipply: ${multiply(4, 5)} and my id is: ${ID}`)//3A
// console.log(`${a(3, 4)} and ${m(3, 4)}`) //3B
// console.log(`${searchView.add(3, 4)}`) //3C

///======================PRACTICE=================================//////////////
