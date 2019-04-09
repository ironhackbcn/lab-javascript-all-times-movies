/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arrayValues){
  let ratingsArray = arrayValues.map(function(currentValue) {
    return currentValue.rate;
  })
  total = ratingsArray.reduce( function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0);
  average = (total/arrayValues.length).toFixed(2);
  return parseFloat((total/arrayValues.length).toFixed(2)); 
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayValues){

}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
