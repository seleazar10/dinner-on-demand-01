// import {shout} from "./test" //1
import './styles/main.css'
import "./images/favicon.png"
// import string from "./models/Search" //2
// import {add, multiply, ID} from "./views/searchView"//3A
import {add as a, multiply as m} from "./views/searchView" //3B
import * as searchView from "./views/searchView" //3C


// console.log(shout('John')) //1
// console.log(string)     //2
// console.log(`to add: ${add(3, 4)} and to multipply: ${multiply(4, 5)} and my id is: ${ID}`)//3A
console.log(`${a(3, 4)} and ${m(3, 4)}`) //3B
console.log(`${searchView.add(3, 4)}`) //3C






