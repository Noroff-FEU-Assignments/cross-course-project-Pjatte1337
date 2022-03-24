const movieContainer = document.querySelector(".movie-container");
const popup = document.querySelector(".detail-flex-info");
const picContainer = document.querySelector(".pic-container");
const items = document.querySelector(".items");
const buttons = document.querySelector (".detail-flex-button");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const apiKey = '04c35731a5ee918f014970082a0088b1';
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
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
    movieContainer.innerHTML =  `<div>
                                
                                <h2 class>${info.original_title}</h2>
                                <hr>
                                <p class="bold">${info.overview}</p>
                                <p class="italic">length ${info.runtime}Min</p>
                                <p class="italic">Rating ${info.vote_average}</p>
                                <p class="italic">Release ${info.release_date}</p>
                                <p class="price"> Price : $9,99 </p>
                                <hr>
                                <button class="btn-buy" id="button">Buy to watch</button>
                                </div>
                                `;

    picContainer.innerHTML =    `<div>
                                <img src="${IMGPATH + info.poster_path}" class="image" alt="${info.original_title}"/>
                                </div>`;

    popup.innerHTML =           `
                                <div class="detail-flex-info">
                                <img src="${IMGPATH + info.poster_path}" class="detail-popup-image"/>
                                <p class="italic">${info.original_title}</p>
                                <p class="italic">length ${info.runtime}Min</p>
                                <p class="italic">Rating ${info.vote_average}</p>
                                <p class="italic">Release ${info.release_date}</p>
                                </div>`;

    buttons.innerHTML =         `<div class="detail-flex-button">
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
