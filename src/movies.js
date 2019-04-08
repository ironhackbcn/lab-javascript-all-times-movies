/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){

  let ratesArray = [];
  movies.forEach( function (element) {
    ratesArray.push(element.rate);
  });
  let sumRates = ratesArray.reduce(function(a, b) { return a + b; });
  
  return Math.round((sumRates / movies.length)*100)/100;
}

//console.log(ratesAverage(movies2));


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average



