import './styles/main.css';
import Search from "./models/Search";
import {elements, renderLoader, displayLoadingPic, clearLoader} from "./views/base";
import * as searchView from "./views/searchView"


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
                // const mySearch = 'pizza'
                // console.log(mySearch)
    if (mySearch) {
        //2. new search object and add to state
        state.search = new Search(mySearch);
                // console.log(state.search)

        //3. Prepare UI for result.   
        searchView.clearInput();
        searchView.clearResults();

        console.log(elements.searchRes)        
        renderLoader(elements.loadingPic)

        //4. Search for recipes
        await state.search.getResults();

        //5. Render result in UI
        console.log("--------------------")
        console.log(state.search.result)
        console.log("--------------------")

        clearLoader()
        searchView.renderResults(state.search.result)


    }else{
        console.log('search bar is empty. Please complete')
    }
}




elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
    controlSearch()
})

















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
