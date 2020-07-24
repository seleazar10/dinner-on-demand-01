import axios from "axios"


export default class Recipe {
    constructor(id) {
        this.id = id
    }

    async getRecipe() {
        console.log(`the ID of the selected recipe is: ${this.id}`)

        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            // console.log(res)

            this.resRecipe = await res.data.recipe;
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (err) {
            console.log(err)
            alert(`There is an error`)
        }


    }

    calcTime(){

        const arrLength = this.ingredients.length;
        const cookTime = (15 * arrLength) / 3
        this.cookTimeCeil = Math.ceil(cookTime)

        console.log(arrLength)
        console.log(cookTime)
        console.log(this.cookTimeCeil)
    }

    calcSerbings(){
        this.servings = 4
    }


}