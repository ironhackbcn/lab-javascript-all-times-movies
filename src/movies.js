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
     } 
    });
    if (drama.length === 0) {
      return undefined;
    };
  return parseFloat(ratesAverage(drama).toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration (array) {
  array.sort((a, b) => {
      return a.duration - b.duration;
  });
  return array
  //console.log(newArray)
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
   return `Steven Spielberg directed ${this.counter} drama movies!`;
}


// Order by title and print the first 20 titles
function orderAlphabetically (array) {
  let movieTitle = array.title.split( () => {
    if (array.length < 20) {
      return array;
    } else {
      for (let i = 0; i < 21; i++) {
        return array[i];
      }
    }
  });
  return movieTitle.sort();
}


// Best yearly rate average
