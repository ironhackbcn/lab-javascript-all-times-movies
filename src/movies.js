/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(arr){
    var average = arr.reduce(function(accumulator, movie){
        return (accumulator + movie.rate);
        
    },0);
    console.log(parseFloat(Math.floor((average/arr.length).toFixed(2))));
    return parseFloat(((average/arr.length).toFixed(2)));
}
ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(arr){
    var x = 0;
    if(arr.length < 0) {
        return undefined;
    }
      var dramaArray= arr.filter(function(movie){
          return movie.genre.includes("Drama");
     }); 
     console.log('hola',dramaArray);
  
     var rateAverage = dramaArray.reduce(function(accumulator, elem){
      console.log(elem.rate);
      return accumulator+elem.rate;
     },0);
     if( dramaArray.length === 0 ){ return undefined } else {
     return parseFloat((rateAverage/dramaArray.length).toFixed(2));}
  }
dramaMoviesRate(movies);





// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
    var dramaArray= arr.filter(function(movie){
        return (movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"));
   }); 
   if ( arr.length===0){ return undefined} else {
   return "Steven Spielberg directed "+dramaArray.length+" drama movies!";}
}

howManyMovies(movies)


// Order by title and print the first 20 titles


// Best yearly rate average
