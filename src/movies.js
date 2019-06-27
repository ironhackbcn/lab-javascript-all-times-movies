/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals

 function ratesAverage (movies){
    var rates = movies.map(function(movie){
        return movie.rate;
     });

    var sumRates = rates.reduce(function(accumulator, rate) {
        return accumulator + rate;
    }, 0);

    /*var roundedRate = Math.floor(sumRates/movies.length);*/
    var twoDecimals = (sumRates/movies.length).toFixed(2);

    return Number.parseFloat(twoDecimals);

};

// Get the average of Drama Movies

 function dramaMoviesRate(movies){
   var filteredMovies = movies.filter(function(movie){
        return movie.genre.indexOf('Drama') !== -1; 
    });

    if (filteredMovies.length === 0){
        return undefined;
    };

     var sumDrama = filteredMovies.reduce(function(accumulator, genre){
        return accumulator + genre.rate;
     }, 0);

     
    var dramaTwoDecimals = (sumDrama/filteredMovies.length).toFixed(2);
    return Number.parseFloat(dramaTwoDecimals);

 };

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG



function howManyMovies (movies){
    var noMovies = movies.filter(function(movie){
        return movie.director.indexOf('Steven Spielberg') !== -1;
        console.log("Steven Spielberg directed 0 drama movies!");
    });   
  
};

// Order by title and print the first 20 titles


// Best yearly rate average
