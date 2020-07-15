import axios from "axios";


export default class Search {
    constructor(mySearch) {
        this.mySearch = mySearch;
    }


    //API Call
    async getResults() {

        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.mySearch}`);
            console.log(res) //jSON returned
            this.allRecipes = await res.data.recipes
            console.log(this.allRecipes) //recipe list - objects
            console.log('no error')
        } catch (error) {
            console.log(error)
        }
    }
}






///======================PRACTICE=================================//////////////
// export default "I am an imported text/string";
///======================PRACTICE=================================//////////////




