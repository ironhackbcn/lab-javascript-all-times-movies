/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let aver =
    movies.reduce(function(accumulator, movie) {
      return accumulator + movie.rate;
    }, 0) / movies.length;

  return (result = parseFloat(aver));
}
console.log(ratesAverage(movies));

// Get the average of Drama Movies

let dramaMovies = movies.filter(function(movie) {
  return movie.genre.includes("Drama");
});

function dramaMoviesRate(dramaMovies) {
  let averDrama = // pone undefined
    dramaMovies.reduce(function(accumulator, dramaMovie) {
      return accumulator + dramaMovie.rate;
    }, 0) / dramaMovies.length;

  if (dramaMovies.length === 0) {
    return undefined;
  } else if (dramaMovies.length === 1) {
    return dramaMovies.rate;
  } else {
  }
  return parseFloat(averDrama);
}
console.log(dramaMoviesRate(dramaMovies)); // devuelve NaN

/*




function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
} */

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

let spielbergMovies = movies.filter(function(movie) {
  return movie.director.includes("Steven Spielberg");
});

let spielbergMoviesDrama = spielbergMovies.filter(function(movie) {
  return movie.genre.includes("Drama");
});

function howManyMovies(arr) {
  return console.log(`'Steven Spielberg directed: ${arr.length} drama movies!`);
}

let resultSpielberg = howManyMovies(spielbergMoviesDrama);

console.log(`'Steven Spielberg directed: ${resultSpielberg} drama movies!`);

// Order by title and print the first 20 titles

// Best yearly rate average  */
