/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// NO FUNCIONA
function turnHoursToMinutes(movies) {
  let turnHoursToMinutesNew = [];
}

// Hola function turnHourstoMinutes()! Me gustaría que entres al array movies y que vayas por cada elemento que equivale a un
// objeto buscándome el valor de la propiedad duration. Verás que el valor mide la duración en horas y en minutos. Para facilitarnos
// la vida podrías convertir la primera parte del string (que es un número en horas) multiplicándolo por 60 minutos. El resultado de
// esta multiplicación la sumas con el segundo número del string y obtendrás un número que son los minutos total de la duración de cada
// película del array. Ojo! Ya que el valor está dado en un string, me gustaría que transformaras el tipo de un string a un número.
// Para la conversión te recomiendo que uses o parseInt o parseFloat, fíjate cual te funciona mejor. Al final me gustaría que me devuelvas
// un array en el cual el valor de la propiedad de cada objeto-película esté convertido en minutos. Podrás utilizar el método “map”.

// function hhh(movies) {
//   movies.map(function(movie){
//     let temporalTwo = movie.duration.splice(0,3);
//     let temporalOne = parseInt(movie.duration[0], 10)*60  + parseInt(movie.duration.splice(0,3),10);
//     return  });

//   //var newArray = array.map(function(number){
//   //return number * 2;
// }

// console.log(hhh(movies))

// function convertToNumber(string) {

// let temporal = "";
// let min1 = 0;
// let min2 = 0;

// temporal = movies[num].duration;
// temporal = "2h 22min"
// min1 = temporal[0] * 60
// min2 = temporal[3]

// min2 = tiene que ser 2h * 60
// min1 = tiene que ser 22min

// parseInt('2h 22min', 10)

// }

//movies.forEach(function(movie){
//  let temporalTwo = movie.duration.splice(0,3);
//  let temporalOne = parseInt(movie.duration[0], 10)*60  + parseInt(movie.duration.splice(0,3),10);
//
//   convertToNumber(movie.duration);
// })
//

// Get the average of all rates with 2 decimals
// NO FUNCIONA
function ratesAverage(totalArray) {
  const num = totalArray.reduce(function(sum, array) {
    return Math.floor((sum + array.rate / totalArray.length) * 100) / 100;
  }, 0);
  console.log(num);
  return num;
}

// Get the average of Drama Movies
// NO FUNCIONA
function dramaMoviesRate(movies) {
  var arrayDramaMovies = [];

  for (var i = 0; i < movies.length; i++) {
    for (var j = 0; j < movies[i].genre.length; j++) {
      if (movies[i].genre[j] === "Drama") {
        arrayDramaMovies.push(movies[i]);
      }
    }
  }
  return ratesAverage(arrayDramaMovies);
}
// Order by time duration, in growing order
// NO FUNCIONA
function orderByDuration(movies) {
  let longitud = movies.length;
  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud; j++) {
      if (movies[j] > movies[j + 1]) {
        let temporal = movies[j];
        movies[j] = movies[j + 1];
        movies[j + 1] = temporal;
      }
    }
  }
  return movies;
}
// How many movies did STEVEN SPIELBERG
// NO FUNCIONA
function howManyMovies(movies) {
  function howManyMovies(movies) {
    let movieSpielberg = movies.filter(function(movie) {
      return movie.director === "Steven Spielberg";
    });
    if (movieSpielberg.length === 0) {
      return `Steven Spielberg directed 0 drama movies!`;
    }
    return movieSpielberg;
  }
}

// function isItADramaMovie(array) {
//   let arrayDramaMovie = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].genre.length; j++) {
//       if (array[i].genre[j] === "Drama") {
//         arrayDramaMovie.push(array[i]);
//       }
//     }
//   }
//   return arrayDramaMovie;
// }

// function howManyMovies(movies) {
//   let movieSpielberg = movies.filter(function(movie) {
//     return movie.director === "Steven Spielberg";
//   });
//   if (movieSpielberg.length === 0) {
//     return `Steven Spielberg directed 0 drama movies!`;
//   } else if (isItADramaMovie(movieSpielberg) ===

//     movieSpielberg[0].genre === ["Drama"]) {
//     return `Steven Spielberg directed 1 drama movies!`;
//   }
//   return movieSpielberg;
// }

// Order by title and print the first 20 titles
// NO FUNCIONA
function orderAlphabetically() {}
// Best yearly rate average
// NO FUNCIONA
function bestYearAvg() {}
