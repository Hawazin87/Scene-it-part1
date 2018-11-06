var movies;
// document.addEventListener("DOMContentLoaded", function() {                
var container = document.getElementById("movies-container");
function renderMovies(movieArray){
    var movieHTML = movieArray.map(function(currentMovie){
        return ` 
             <div class="movie">
				<img class="movieImg" src="${currentMovie.Poster}"/>
				<h3 class="movieTitle" id="movieTitle">${currentMovie.Title}</h3>
				<h5 class="movieReleaseYear" id ="movieReleaseYear">${currentMovie.Year}</h5>
				<button class="addButton" id="add" onclick="saveToWatchlist(${currentMovie.imdbID})">Add</button>
			</div>
        `
    });


    container.innerHTML = movieHTML.join("");
    
};

// var content = document.getElementById('content');
// content.innerHTML = renderMovies(movieData);
    document.getElementById("search-form").addEventListener('submit',function(e){
    e.preventDefault();
    var movieSearch = document.getElementById('movieSearch').value;
    var encodedSearch = encodeURIComponent(movieSearch);
    axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + encodedSearch).then(function(response) {
        renderMovies(response.data.Search);
        movies = response.data.Search;    
});
});

//Add to watch list
    function saveToWatchlist(imdbID){
        var movie = movies.find(function(currentMovie){
            return currentMovie.imdbID == imdbID;

        });
            var watchListJSON = localStorage.getItem('watchlist');
            var watchList = JSON.parse(watchlistJSON);
            if (watchlist == null) {

                watchList =[];
            }

            watchlist.push(movie);
            watchlistJSON = JSON.stringify(watchlist);
            localStorage.setItem('watchlist', watchlistJSON);
    
    }
  


