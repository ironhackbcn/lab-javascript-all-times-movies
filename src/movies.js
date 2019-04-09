/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array) {
  let minutes1 = array.duration.split('h') * 60;
  let minutes2 = array.duration.split('min') % minutes1;
  let newMinutes = minutes2 + minutes1;
  let newArray = array.filter( (element) => {
    element.duration = newMinutes;
  });
  return newArray;
}

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
    if (drama.length === 0 || isNaN(ratesAverage(drama))) {
      return undefined;
    } else {
  return parseFloat(ratesAverage(drama).toFixed(2));
  }
}

// Order by time duration, in growing order
function orderByDuration (array) {
  array.sort((a, b) => {
      return a.duration - b.duration;
  });
  return array
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (array) {
  if (array.length === 0) {
    return undefined;
  }
  let counter = 0;
  array.forEach( (element) => {
    if ((element.director === 'Steven Spielberg') && (element.genre.indexOf('Drama') !== 0)) {
    counter++;
    }
   });
   return `Steven Spielberg directed ${counter} drama movies!`;
}


// Order by title and print the first 20 titles
function orderAlphabetically (array) {
  array.sort( (objA, objB) => {
    if (objA.title < objB.title) {
      return -1;
    } else if (objA.title > objB.title) {
       return 1;
    }
  })
  let top20 = array.splice (0, 20);
  let result = top20.reduce ( (accu, ele) => {
    accu.push(ele.title);
    return accu;
  }, [] );
  return result;
}
// Best yearly rate average
