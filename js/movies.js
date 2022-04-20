const baseUrl = "https://www.pjatteprocjet.one/wp-json/wc/store/products?per_page=14";

const movieContainer = document.querySelector(".container");

async function getProduct(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    movieContainer.innerHTML ="";

    products.forEach(movie => {
        const movieName = movie.name;
        const id = movie.id;
        const img = movie.images[0].src;
        const info = movie.description;
        const aInfo = movie.short_description;

        movieContainer.innerHTML += `<a href="./movies-details.html?id=${id}" class="movie">
                                            <h2>${movieName}</h2>
                                            <img src="${img}" class="movie-img" alt="${movieName}"/>
                                            <button class="btn-read-more"> Read more </button>
                                            </a>
                                            `
        
    });

}

getProduct(baseUrl);