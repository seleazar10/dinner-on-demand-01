import {elements} from "./base";


export const toggleLikeBtn = isLiked =>{
    const heartColor = isLiked ? "red": "black";
    document.querySelector('.fav-heart ').style.color = `${heartColor}`

}

export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like =>{

    const markup =
    `
    
                        <li>
                            <a class="likes__link" href="${like.id}">
                                <figure class="likes__fig">
                                    <img src="${like.img}" alt="${like.title}">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">${like.title}</h4>
                                    <p class="likes__author">${like.author}</p>
                                </div>
                            </a>
                        </li>

                        
    `

    elements.likesList.insertAdjacentHTML('beforeend', markup)
}


export const deleteLike = id =>{

    

}