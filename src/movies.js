"use strict";
/* eslint no-restricted-globals: 'off' */


////////////// Turn duration of the movies from hours to minutes ////////////

function turnHoursToMinutes(movieArray){
let hours = 0;
let timeInMinutes = movieArray.map(function(movie) {
  for(var i = 0; i < movieArray.length; i++) {
     hours = Number(movie.duration.charAt(0)) * 60;
  }
})
return hours;
}

/////////////// Get the average of all rates with 2 decimals ///////////////

function ratesAverage (movieArray) {
  let rateSum = movieArray.reduce( (accum, movie) =>
  accum + movie.rate, 0) / movieArray.length;

  return parseFloat(rateSum.toFixed(2));
};

////////////////// Get the average of Drama Movies ////////////////////////

function dramaMoviesRate(moviesArray) {
  var dramaMovies = moviesArray.filter((movie) => {if(movie.genre.includes('Drama')){
    return true;
  } 
  });
  if(dramaMovies.length === 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

///////////////// Order by time duration, in growing order ////////////////

// (movieA, movieB) => {return movieA.duration - movieB.duration

function orderByDuration(movieArray) {
  movieArray.sort((movieA, movieB) => {return movieA.duration - movieB.duration});
  return movieArray;
}

////////////////// How many movies did STEVEN SPIELBERG /////////////////////

function howManyMovies(movieArray) {
  var spielbergMovies = [];
  movieArray.forEach(function(movie) {
    if(movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')){
      spielbergMovies.push(movie);
    }
  });

  // QUESTION - when I return undefined, Jasmine tells me to return 'Steven Spielberg directed 0 drama movies!' but when I return that string, Jasmine tells me to return undefined. WILL SHE EVER BE CONTENT?

  if (spielbergMovies.length === 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  } else {
    return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
  }
}

///////////////// Order by title and print the first 20 titles /////////////////

function orderAlphabetically(movieArray) {
  let titles = movieArray.map(function(movie){
    return movie.title;
  });
  return titles.sort().slice(0, 20);
}

/////////////////////// Best yearly rate average /////////////////////////////
