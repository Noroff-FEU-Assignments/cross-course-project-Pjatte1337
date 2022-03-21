const api_key = `04c35731a5ee918f014970082a0088b1`;
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const movieContainer = document.querySelector(".container");

async function getMovies(){
    try{
        const response = await fetch(baseUrl);
        const json = await response.json();
        const data = json.results;

        console.log(data);

        movieContainer.innerHTML ="";

        data.forEach(movie => {
            const movieTitle = movie.title;
            const date = movie.release_date;
            const img = movie.poster_path;
            const info = movie.overview;
            const rating = movie.vote_average;
            const id = movie.id;

            movieContainer.innerHTML += `<a href="./movies-details.html?id=${id}" class="movie">
                                            <h1>${movieTitle}</h1>
                                            <img src="${IMGPATH + img}" class="movie-img" alt="${movieTitle}"/>
                                            <button class="btn-more"> Read more </button>
                                            </a>
                                            `
        });

        
    } catch (error) {
        movieContainer.innerHTML += `<p class="movie">Something is wrong, please try again or contact us</p>`;
    }
}

getMovies();



