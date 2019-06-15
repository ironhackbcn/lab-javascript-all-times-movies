/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {}

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  //create a variable to save the average rate after the loop
  let sum = 0;
  // iterate over the array to get the rate of each movie
  for (let i = 0; i < array.length; i++) {
    //just in case rate is a string, convert it to a number
    //sum gets the rate of each object in the array and sum it to sum
    sum = parseFloat(sum + array[i].rate);
  }
  //divide the sum of the loop and the length of the array to get the average
  //Save the rounded to 2 decimals sum in a variable
  let average = Math.round((sum / array.length) * 100) / 100;
  //return the average
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(function(movie) {
    if (movie.genre.includes("Drama") === true) {
      return movie;
    } else {
      return undefined;
    }
  });
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(array) {}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  count = 0;
  let stevenMovies = array.filter(function(movie) {
    if (
      movie.director.includes("Steven Spielberg") &&
      movie.genre.includes("Drama") === true
    ) {
      count++;
      return movie;
    } else {
      return `Steven Spielberg directed 0 movies!`;
    }
  });
  return `Steven Spielber has done ${count} movies}`;
}

// Order by title and print the first 20 titles

// Best yearly rate average
