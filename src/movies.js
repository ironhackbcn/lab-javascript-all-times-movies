/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arr) { 
  var rates = arr.map(function(obj){
  return obj.rate;
  });
  var total = rates.reduce(function(acc,number){
  return acc+number;  
  }, 0); 
  return parseFloat((total/rates.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) { 

  
  var dramaFilms = arr.filter(function(obj){
    return obj.genre.includes('Drama');
  })

  if(dramaFilms.length === 0) {
    return undefined;
  }
  
  var rates = dramaFilms.map(function(obj){
    return obj.rate;
  });
  var total = rates.reduce(function(acc,number){
    return acc+number;  
  }, 0); 

  return parseFloat((total/rates.length).toFixed(2));
  
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  var dramaSteveFilms = arr.filter(function(obj){
    return (obj.genre.includes('Drama') && obj.director==='Steven Spielberg');
  })
//'Steven Spielberg directed 0 drama movies!'
  if(dramaSteveFilms.length === 0) {
    return undefined;
  }

  return 'Steven Spielberg directed ' +  dramaSteveFilms.length + ' drama movies!';
}


// Order by title and print the first 20 titles
function orderAlphabetically(arr){
 var moviesTitle = arr.filter(function(obj){
  return obj.title;
  })
  if (moviesTitle.length >20){
    
  }
  return moviesTitle.sort()
}


// Best yearly rate average
