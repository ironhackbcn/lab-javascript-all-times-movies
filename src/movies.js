/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

// var total = 0;
// let ratesAverage = movies.map(function (element) {
//   return element.rate;
// });

// for (var i = 0; i < ratesAverage.length; i++) {
//   total += ratesAverage[i];
// }

// console.log(parseFloat(total / ratesAverage.length));


// I was stock Trying to do it with one method


function ratesAverage(array) {
  let total = array.reduce((accum, element) => accum + element.rate, 0);
  return parseFloat((total / array.length).toFixed(2));
};

console.log(ratesAverage(movies));





// Get the average of Drama Movies  

function dramaMoviesRate(array) {
  // filtrar el array filtrando las que tienen una categoría drama
  let drama = array.filter(function (element) {
    //genre: ['Crime', 'Drama'],
    if (array.genre.includes("Drama")) {
      drama.push(element);
    }
    //number;
  });
  let total = drama.reduce((accum, element) => accum + element.rate, 0);
  return parseFloat((total / array.length).toFixed(2));
};

console.log(dramaMoviesRate(movies));






// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average