/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// 2.Get the average of all rates with 2 decimals 
//all rates of all
var allRate = movies.map(function (element) {
    return element.rate;
});

//sum of all rates
var allMoviesReduced1 = allRate.reduce(function (accum, elem) {
    var updatedAccum = accum + elem;
    return updatedAccum;
})

//now we: Get the average of all rates with 2 decimals 
function ratesAvarage(array) {
    return (array / allRate.length).toFixed(2);
}
console.log("All movies avar. rate: " + ratesAvarage(allMoviesReduced1));

// 3. Get the average of Drama Movies
// all drama movies
var allDramaMovies = movies.filter(function (movieObj) {
    return movieObj.genre.includes('Drama');
})

//all rates of drama
var allDramaRate = allDramaMovies.map(function (element) {
    return element.rate;
})

//sum of drama rates
var dramaReduced = allDramaRate.reduce(function (accumulator, element) {
    var updatedAccumulator = accumulator + element;
    return updatedAccumulator;
})

//we get: Get the average of Drama Movies, rounded to 2 decimals
function dramaMoviesRate(array) {
    return (array / allDramaRate.length).toFixed(2);
}
console.log("Drama movies avar. rate: " + dramaMoviesRate(dramaReduced));

// Order by time duration, in growing order


//5 How many movies did STEVEN SPIELBERG
//all Spielbergs drama movies
var allSpielbergMovies = allDramaMovies.filter(function (movObj) {
    return movObj.director.includes('Steven Spielberg')

})

console.log(allSpielbergMovies)

//6 Order by title and print the first 20 titles
var allTitles = movies.map(function (element) {
    return element.title;
})
allTitles.sort();
console.log(allTitles.slice(0, 20));

// Best yearly rate average()