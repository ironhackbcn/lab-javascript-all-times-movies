// const data = require('data.js')

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
var ratesAverage = function(array) {

const rate = array.reduce((accumulator, currentValue) =>
   accumulator + currentValue.rate,0)/array.length;


  return parseFloat(rate.toFixed(2));
  
};

// Get the average of Drama Movies
var dramaMoviesRate = function(array){
  
  const newArrayDramas = array.filter( function (element) {
     if (element.genre.includes("Drama"))
     return element;
  })
  if(newArrayDramas.length<1){
    return;
  }
  var averageDramaMovies = ratesAverage(newArrayDramas);
  console.log(newArrayDramas);
  return averageDramaMovies;
}


// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
