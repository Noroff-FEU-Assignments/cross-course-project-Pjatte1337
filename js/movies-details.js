const moviesContainer = document.querySelector(".movie-container");
const popup = document.querySelector(".detail-info");
const picContainer = document.querySelector(".pic-container");
const items = document.querySelector(".items");
const buttons = document.querySelector (".detail-button");
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

function createHTML(info) {
    moviesContainer.innerHTML =  `<div>
                                
                                <h2 class>${info.name}</h2>
                                <hr>
                                <p class="bold">${info.description}</p>
                                <p class="italic"> ${info.short_description} </p>
                                <p class="price">Price : ${info.prices.price}${info.prices.currency_code}</p>
                                <hr>
                                <button class="btn-buy" id="button">Buy to watch</button>
                                </div>
                                `;

    picContainer.innerHTML =    `<div>
                                <img src="${info.images[0].src}" class="image" alt="${info.name}"/>
                                </div>`;

    popup.innerHTML =           `
                                <div class="detail-info">
                                <img src="${info.images[0].src}" class="detail-popup-image"/>
                                <p class="italic">${info.name}</p>
                                <p class="italic"> ${info.description}</p>
                                </div>`;

    buttons.innerHTML =         `<div class="detail-button">
                                <a href="./shopping-cart.html?id=${id}" class="btn-cart">go to cart</a>
                                <a href="movies.html" class="btn-back">Look for more</a>
                                </div>`;
}


document.getElementById("movie").addEventListener("click", function(){
    document.querySelector(".detail-popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".detail-popup").style.display = "none";
})
