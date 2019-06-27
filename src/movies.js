/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var newMovies = [];
  var sum = [];
  array.forEach( function(movie){
    newMovies.push(movie);
    //movie.forEach( function(time){
      //time.splice(3,0,movie.duration[0] * 60);
    })
    //newMovies.push(movie);
    //newMovies.splice(3,0,movie.duration[0] * 60);
    //newMovies.push(movie.duration[0] * 60);
    if(movie.duration[3]){
      sum = sum.map( function(number){
        return number + (movie.duration[3]*10);
        
      })
      //console.log(movie.duration[3]*10);
    }
    
  })

  console.log(newMovies);
  return newMovies;
}
turnHoursToMinutes(movies);



//var rates = movies.rate;
function ratesAverage(movieArrays){
  var average = movieArrays.reduce( function(accumulator, movie){
    return accumulator + parseFloat(movie.rate);
  }, 0);
  return parseFloat((average / movieArrays.length).toFixed(2));
}
var averageAllMovies = ratesAverage(movies);



// Get the average of Drama Movies
function dramaMoviesRate(array){
  var dramaMovies = [];
  array.forEach( function(movie){
    if(movie.genre.includes('Drama')){
      dramaMovies.push(movie);
    }
  });
  if(dramaMovies.length === 0){
    return;
  }
  var averageDrama = dramaMovies.reduce( function(acc, data){
    return acc + data.rate;
  },0);
  return parseFloat((averageDrama / dramaMovies.length).toFixed(2));
}
var averageDramaMovies = dramaMoviesRate(movies);



// Order by time duration, in growing order
function orderByDuration(array) {
  var moviesDuration = [];
  array.forEach( function(time){
    moviesDuration.push(time.duration);
  });

  for(i=0; i<moviesDuration.length; i++){
    moviesDuration[i].split('');
  }
  //console.log(moviesDuration);

}
var Duration = orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  var dramaMovies = [];
  var SpielbergDramaMovies = [];
  array.forEach( function(movie){
    if(movie.genre.includes('Drama')){
      dramaMovies.push(movie);
      if(!movie.director.includes('Steven Spielberg') ){
        return 'Steven Spielberg directed' + SpielbergDramaMovies.length + 'drama movies!';
      } else {
        SpielbergDramaMovies.push(movie);
      }
    };
    return;
  });
  return 'Steven Spielberg directed ' + SpielbergDramaMovies.length + ' drama movies!';
}
howManyMovies(movies)



// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var orderMovies = [];
  array.forEach( function(movie){
    orderMovies.push(movie.title);
    orderMovies.sort();
    if(orderMovies.length > 20){
      orderMovies.splice(20, orderMovies.length-20);
    }
  })
  return orderMovies;
}
orderAlphabetically(movies);

// Best yearly rate average
