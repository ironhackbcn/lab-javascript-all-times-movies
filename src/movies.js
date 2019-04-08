/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage (array) {
	let averageRate = 0;
	array.map((movie) => {
		averageRate += movie.rate;
	})
	console.log(Math.round((averageRate/array.length) * 100) / 100)
}


// Get the average of Drama Movies

function dramaMoviesRate (array) {
	let averageRate = 0;
	let count = 0;
	array.map((movie) => {
		movie.genre.map((genre) => {
			if (genre === 'Drama') {
				averageRate += movie.rate;
				count++;
			} 	
		})
		
	})
	console.log(Math.round((averageRate/count) * 100) / 100)
}


// Order by time duration, in growing order

function orderByDuration (array) {
	array.sort(function(a, b){return a.duration-b.duration});
	console.log(array);
}

// How many movies did STEVEN SPIELBERG

function howManyMovies (array) {
	let count = 0;
	array.map((movie) => {
		if (movie.director === 'Steven Spielberg') count++;
	})

	console.log(count);
}


// Order by title and print the first 20 titles

function orderAlphabetically (array) {
	array.sort(function(a, b){return a.title-b.title});
	console.log(array.slice(0, 20));  
}

// Best yearly rate average


