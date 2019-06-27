/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  var sum = arr.reduce(function(acc, movie){
    return acc += movie.rate
  }, 0);
  return parseFloat((sum / arr.length).toFixed(2))
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(arr){
  var dramaMovies = arr.filter(function(movie){
    return movie.genre.includes("Drama")

  })
  if (dramaMovies.length === 0) {
   return undefined;
  }
  var sum = dramaMovies.reduce(function(acc, movie){
    return acc += movie.rate
  }, 0);
  return parseFloat((sum / dramaMovies.length).toFixed(2))
}


function howManyMovies(arr){
  var dramaMovies = arr.filter(function(movie){
    return movie.genre.includes("Drama");
  });
  var spielbergMovies = dramaMovies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  });
  if (spielbergMovies.length === 0){
    return undefined;
  }
  return "Steven Spielberg directed " + spielbergMovies.length + " drama movies!";
}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
