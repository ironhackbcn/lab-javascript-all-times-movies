/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


let arrLength = movies.filter( function (ratesLength) {
  return ratesLength.rate;
});

//console.log(arrLength.length);

let rateSum = movies.reduce(function (accumulator, score) {
  return (accumulator + score.rate);
}, 0);

//console.log(rateSum);

function ratesAverage(movies) {
  return console.log(parseFloat(rateSum/arrLength.length));
}

/* function ratesAverage(movies) {
  let arrLength = movies.filter( function (ratesLength) {
    return ratesLength.rate;
  });
  movies.reduce(function (accumulator, score) {
    return console.log(parseFloat(accumulator + score.rate));
  }, 0) / arrLength.length ;
} */

 // Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
