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
				<button class="addButton" id="add">Add</button>
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


