/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  /*var duration = arr.map(function(obj){
    return obj.duration.split(' ');
    });
    */ 
  //erase(duration);

  //arr[i].duration
  for( var i =0; i < arr.length; i++){
    var durationEachFilm = arr[i].duration.split(' ');
    var result = erase(durationEachFilm).toString();
    arr[i].duration = result;
  }
} 
function erase(arr){
  var newArr = arr.map(function(element){
    if(element.includes('h')){
      return element.split('h').reduce(function(acc,number){
      return acc+number})*60 ;
    } else if (element.includes('min')){
      return parseInt(element.split('min').reduce(function(acc,number){
        return acc+number}));
    }
  }); 
  return newArr.reduce(function(acc,number){
    return acc+number}) 
}


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
 var moviesTitle = arr.map(function(obj){
  return obj.title;
  });
  var moviesSorted = moviesTitle.sort();
  if (moviesSorted.length > 20){
    moviesSorted.splice(20);
  }
  return moviesSorted
}


// Best yearly rate average
