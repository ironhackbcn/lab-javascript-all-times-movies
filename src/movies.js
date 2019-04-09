/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

ratesAverage = function(arr){
  var ratesArr = arr.map((arr) => {return arr.rate});

  var ratesSum = ratesArr.reduce(function(accumulator, currentNum){
    return accumulator + currentNum;
  });

  var average = ratesSum / ratesArr.length;

  if(Number.isInteger(average)){
    return parseInt(average);
  } else {
    return Math.round(average * 100) / 100;
  }
}

// Get the average of Drama Movies


dramaMoviesRate = function(arr){

  var dramaMovies = arr.filter(function(movies){
    if(movies.genre.includes('Drama')) {
      console.log(movies.rate)
      return movies.rate;
    }
  })
  if(dramaMovies.length === 0) return undefined;

  var ratesDramaArr = dramaMovies.map(function(arr){
   return arr.rate;
  });
  console.log(ratesDramaArr)

  

  var ratesDramaSum = ratesDramaArr.reduce(function(accumulator, currentNum){
    return accumulator + currentNum;
  });

  var average = ratesDramaSum / ratesDramaArr.length;

  if(Number.isInteger(average)){
    return parseInt(average);
  } else {
    return Math.round(average * 100) / 100;
  }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
