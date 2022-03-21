const items = document.querySelector(".items");
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

function createHTML(info){
    items.innerHTML =   `<div class="item">
                        <img src="${IMGPATH + info.poster_path}" class="popup-image"/>
                        <p class="italic">${info.original_title}</p>
                        <p class="italic">Release ${info.release_date}</p>
                        </div>`;

}


