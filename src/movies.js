/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(params) {}

/*********************************************************************************** */
/* Get the average of all rates with 2 decimals*/
function ratesAverage(movies) {
  return (
    movies.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.rate;
    }, 0) / movies.length
  );
}
/*  
/*********************************************************************************** */
// Get the average of Drama Movies*/
function dramaMoviesRate(params) {}
// Order by time duration, in growing order

function orderByDuration(movies) {}
// function dramaMoviesRate(function(a,b))

/*********************************************************************************** */
// How many movies did STEVEN SPIELBERG
function howManyMovies(params) {}

/*********************************************************************************** */
// Order by title and print the first 20 titles
function orderAlphabetically(params) {}

/*********************************************************************************** */
// Best yearly rate average
function bestYearAvg(params) {}
