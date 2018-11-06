document.addEventListener("DOMContentLoaded", function() {

var movies = JSON.parse(localStorage.getItem("watchlist"));            
    var watchList = movies.map(function(currentMovie){
        return ` 
             <div class="movie">
				<img class="movieImg" src="${currentMovie.Poster}"/>
				<h3 class="movieTitle" id="movieTitle">${currentMovie.Title}</h3>
				<h5 class="movieReleaseYear" id ="movieReleaseYear">${currentMovie.Year}</h5>
			</div>
        `
    });


    movies.innerHTML = watchList.join("");
});