/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// Get the average of all rates with 2 decimals
function ratesAverage(totalRates) {
  let resultadoTotal = 0;
  for (let i = 0; i < totalRates.length; i++) {
    resultadoTotal += totalRates[i].rate;
  }
  resultadoTotal = resultadoTotal / totalRates.length;
  return parseFloat(resultadoTotal);
}

// Get the average of Drama Movies
function dramaMoviesRate(dramaAverage) {
  let dramaResult = 0;
  let dramaSum = 0;
  if (
    dramaAverage.length === 1 &&
    dramaAverage[0].genre.indexOf("Drama") != -1
  ) {
    return parseFloat(dramaAverage[0].rate);
  }
  dramaSum = dramaAverage.reduce(function(accumulatorRate, currentRate) {
    if (currentRate.genre.indexOf("Drama") != -1) {
      dramaResult++;
      if (currentRate.rate != "") {
        return parseFloat(currentRate.rate) + accumulatorRate;
      }
    }
    return accumulatorRate;
  }, 0);
  if (dramaResult > 0) {
    return Math.floor((dramaSum / dramaResult) * 100) / 100;
  } else return undefined;
}

// Order by time duration, in growing order
function orderByDuration() {}

// How many movies did STEVEN SPIELBERG
function howManyMovies() {}
// Order by title and print the first 20 titles
function orderAlphabetically() {}
// Best yearly rate average
function bestYearAvg() {}
