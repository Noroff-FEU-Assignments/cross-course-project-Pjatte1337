const items = document.querySelector(".items");
const buttons = document.querySelector(".flex-button");
const watch = document.querySelector(".lolflexbutton");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const url = `https://www.pjatteprocjet.one/wp-json/wc/store/products/${id}`;
console.log(url);

async function fetchInfo(){
    try {
        const response = await fetch(url);
        const info = await response.json();

        console.log(info);

        createHTML(info);


    }catch(error){
    }
}
fetchInfo();

function createHTML(info){
    items.innerHTML =   `<div class="item">
                        <img src="${info.images[0].src}" alt="${info.name}"class="movie-image"/>
                        <p class="italic">${info.name}</p>
                        <p class="italic"> ${info.description}</p>
                        </div>`;
    
    buttons.innerHTML = `<div class="flex-button">
                        <a href="shopping-done.html?id=${id}" class="btn-cart">Checkout</a>
                        <a href="movies.html" class="btn-back">back</a>
                        </div>`;

};


