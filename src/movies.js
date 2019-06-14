/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(array){

  const sum = rateArray.reduce(function (acc, obj){
    return acc + obj.rate ;
  },0);
  
  let decimalResult = sum/array.length;
  return parseFloat(decimalResult.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(array){

  var dramaMovies = array.filter(function (movie) {
    //return movie.genre.Includes("Drama");
  });

  ratesAverage(dramaMovies)
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
