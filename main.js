'strict mode'

let getMoviesFromApi = async () => {
    let respone = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=384d8dfa8859f8bf3f596c1cf4a030a2').catch('Error in Connection')
    let moviesList = (await respone.json())['results']
    displayMovies(moviesList)
}

let displayMovies = (moviesList) => {
    let content = ``
    moviesList.forEach(movie => {
        content += `
            <div class="col-md-4 my-5">
            <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}">
            <h3>${Object.values(movie)[3]}</h3>
            </div>
            `
    });
    document.getElementById('moviesListId').innerHTML = content
}

(() => getMoviesFromApi())()