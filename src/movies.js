/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 

/*
var newMovies = movies.map(function (number){
    return duration ;

  }
*/

function hoursIntoMinutes(duration) {
    let hours = 0;
    var minutes = 0;
    var durations = duration.split(" ");
    durations.forEach(val => {
    if (val.includes("min")) minutes = getMin(val);
    else hours = getHours(val);
    });
    return Number(hours) * 60 + Number(minutes);
}

function getMinutes(duration) {
return duration.substring(0, duration.length - 3);
}

function getHours(duration) {
return duration.substring(0, duration.length - 1);
};
  


// Iteration 2 - Get the average of all rates with 2 decimals 
// Create a ratesAverage method that receive an array as a parameter, get the average rate of all,
// and display it on the console.
// The rate must be returned rounded to 2 decimals!
// Maybe you want to "reduce" the data to a single value

function ratesAverage (movies) {
    let totalRateSum = movies.reduce(function(accumulator, current) {
      return accumulator + parseFloat(current.rate);
    }, 0);
    return parseFloat((totalRateSum / movies.length).toFixed(2));
  };


// Iteration 3 - Get the average of Drama Movies
function dramaMoviesRate (movies) {
    const genreFilter = movies.filter(function(theMovies) {
        return theMovies.genre.includes("Drama");
  });
        if (genreFilter.length > 0) {
        return ratesAverage(genreFilter);
  }
};


// Iteration 4 - Order by time duration, in growing order
// We need to sort the movies in ascending order by their duration
// Create a method orderByDuration that receives an array as parameter and return the sorted array.

function orderByDuration (movies) {
    movies.sort(function(a, b) {
    return parseFloat(a.duration) - parseFloat(b.duration);
    });
};

// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {};

// Order by title and print the first 20 titles


// Best yearly rate average