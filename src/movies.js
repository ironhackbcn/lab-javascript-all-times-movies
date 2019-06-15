/* eslint no-restricted-globals: 'off' */
// Iteration 1:Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let newArray = arr.map(function(movie) {
    let oldDuration = movie.duration;
    let splitHoras = oldDuration.split(" ");
    let horas = splitHoras[0];
    let min = splitHoras[1] || "0min"; //ternario
    let horasOK = horas.substring(0, horas.length - 1);
    let minOK = min.substring(0, min.length - 3);
    let horasOkNumber = parseInt(horasOK);
    let minOKNumber = parseInt(minOK);
    let newDuration = horasOkNumber * 60 + minOKNumber;
    console.log(typeof newDuration);
    movie.duration = newDuration;
    return movie;
  });
  //console.log(newArray);
  return newArray;
}
// turnHoursToMinutes(movies);

// Iteration 2:Get the average of all rates with 2 decimals
function ratesAverage(ar) {
  let sumas = ar.reduce(function(anterior, movie) {
    return anterior + movie.rate;
  }, 0);
  let result = Min.floor(sumas / ar.length);
  return parseFloat(result.toFixed(2));
}
ratesAverage(movies);

// Iteration 3:Get the average of Drama Movies
function dramaMoviesRate(ar3) {
  let dramaMovies = ar3.filter(function(obj3) {
    if (obj3.genre.includes("Drama")) {
      return obj3.rate;
    }
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  let dramaRateMovies = dramaMovies.map(function(obj3) {
    return obj3.rate;
  });
  let sumasDrama = dramaRateMovies.reduce(function(
    anterior,
    actual,
    index,
    arr
  ) {
    return anterior + actual;
  },
  0);
  let resultDrama = sumasDrama / dramaRateMovies.length;
  return Number.parseFloat(resultDrama).toFixed(2);
}
dramaMoviesRate(movies);
// Iteration 4:Order by time duration, in growing order

// Iteration 5:How many movies did STEVEN SPIELBERG
function howManyMovies(ar3) {
  let spielbergMovies = ar3.filter(function(obj3) {
    if (obj3.genre.includes("Drama") && obj3.director === "Steven Spielberg") {
      return obj3;
    }
  });
  if (spielbergMovies.length === 0) {
    return undefined;
  }
  return spielbergMovies.length;
}
//console.log(howManyMovies(movies));
//Abstracción
/*
function howManyMoviesAutor(ar3, autor,genre) {
  let spielbergMovies = ar3.filter(function(obj3) {
    if (obj3.genre.includes(genre) && obj3.director === autor) {
      return obj3;
    }
  });
  if (spielbergMovies.length === 0) {
    return undefined;
  }
  return spielbergMovies.length;
}
console.log(howManyMoviesAutor(movies, "Steven Spielberg"));
console.log(howManyMoviesAutor(movies, "Quentin Tarantino","Drama"));
*/
// Iteration 6:Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let titleArray = arr.map(function(obj) {
    return obj.title;
  });
  let filmsOrdered = titleArray.sort();
  let slicedArray = filmsOrdered.slice(0, 19);
  console.log(slicedArray);
}

orderAlphabetically(movies);
