import {elements} from "./base";


export const toggleLikeBtn = isLiked =>{
    const heartColor = isLiked ? "red": "black";
    document.querySelector('.fav-heart ').style.color = `${heartColor}`

}

export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};