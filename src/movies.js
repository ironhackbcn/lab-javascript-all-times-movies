/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage (movieArr) {
  const ratesTotal = movieArr.reduce(function(total,currenRate){
    return total + currenRate.rate;
  },0);
  return parseFloat((ratesTotal/movieArr.length).toFixed(2));
}
console.log(ratesAverage(movies))


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
