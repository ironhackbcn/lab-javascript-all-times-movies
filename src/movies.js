/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage (array) {

  return array.reduce( (accum, element) => 
    accum + element.rate, 0) / array.length;
  
  };

// Get the average of Drama Movies
function dramaMoviesRate (array) {
  let drama = [];
  array.forEach( (element) => {
    if (element.genre.includes('Drama')){
      drama.push(element);
    } else {
      return undefined;
    }
 });
   return parseFloat(ratesAverage(drama).toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration (array) {
  return array.sort((a, b) => {
   if (a < b){
    return -1;
   }
   if (a > b){
    return 1;
   }
    return 0;
   });
  }

// How many movies did STEVEN SPIELBERG
let counter = 0;
function howManyMovies (drama) {
  let spielbergMovies = [];
  drama.filter( (element) => {
    if (element.director === 'Steven Spielberg') {
    spielbergMovies.push(element);
    counter++;
    } else {
      return undefined;
    }
   });
   return spielbergMovies.join() + counter;
}


// Order by title and print the first 20 titles
function orderAlphabetically (array) {
  let movieTitle = array.title.split( () => {
    if (array.length < 20) {
      return array;
    } else {
      return array[...element[21]];
    }
  });
  let sortedArray = movieTitle.sort( (a, b) => {
     if (a.length > b.length){
      return -1;
    }

     if (a.length < b.length){
      return 1;
    }

     return 0;
    });
     return sortedArray;
  }
  


// Best yearly rate average
