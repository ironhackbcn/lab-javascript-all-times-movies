/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  var totalRate = arr.reduce(function(accumulator, movie){
    accumulator.push(movie.rate);
    return accumulator;
  }, []);
  var sumRates = totalRate.reduce(function(accumulator, rate){
    return accumulator + rate;
  }, 0)
  var average = (sumRates / arr.length).toFixed(2);
  return average;
};

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var onlyDramaMovie = arr.filter(function(movie) {
    return arr.genre.includes('Drama');
  })
  return onlyDramaMovie;
}



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
