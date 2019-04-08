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


// Get the average of Drama Movies
function dramaMoviesRate(movies){

  let dramaArray = movies.filter( function (value){
    if(value.genre.includes('Drama')){
      if(value.rate === ''){
        return '0';
      }
      else{
        return value.rate;
      }
    }
  });

  if(dramaArray.length > 0){
    return ratesAverage(dramaArray);
  }
  else{
    return undefined;
  }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average



