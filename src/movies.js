/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){

  let moviesInMinutes = JSON.parse(JSON.stringify(movies)); //Not cool way :(
  
  for(let i = 0 ; i < movies.length ; i++){

    let stringDuration = movies[i].duration;
    if(stringDuration.indexOf('h') === -1){
      stringDuration = `0h  ${stringDuration}`;
    }
    let hoursDivision = stringDuration.split('h');
    let minutesDivisionWithSpace = hoursDivision[1].split('min');
    let minutesDivision = minutesDivisionWithSpace[0].substring(1);
    let minutes = hoursDivision[0]*60 + minutesDivision*1;
    moviesInMinutes.push(movies[i]);
    moviesInMinutes[i].duration = minutes;
  }

  return moviesInMinutes;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){

  let ratesArray = [];
  movies.forEach( function (element) {
    ratesArray.push(element.rate);
  });
  let sumRates = ratesArray.reduce(function(a, b) { return a + b; });
  
  return Math.round((sumRates / movies.length)*100)/100;
}


// Get the average of Drama Movies
function dramaMoviesRate(movies){

  let dramaArray = movies.filter( function (value){
    if(value.genre.includes('Drama')){
      if(value.rate === ''){
        return '0';
      }
      else{
        return value.rate;
      }
    }
  });

  
  if(dramaArray.length > 0){
    let rate = ratesAverage(dramaArray);
    console.log(rate);
    return rate;
  }
  else{
    return undefined;
  }
}


// Order by time duration, in growing order
function orderByDuration(movies){

  let moviesArr = JSON.parse(JSON.stringify(movies)); //Not cool way :(
  
  moviesArr.sort( function (a, b){
    if( a.duration < b.duration){
      return -1;
    }
    if( a.duration > b.duration){
      return 1;
    }
    if( a.duration === b.duration){
      if(a.title < b.title){
        return -1;
      }
      if(a.title < b.title){
        return 1;
      }
      return 0;
    }
  });
  return moviesArr;
}



// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){

  if(movies.length === 0){
    return undefined;
  }
  else{
    let dramaSpielbergArray = movies.filter( function (value){
      if(value.genre.includes('Drama') && value.director.includes('Steven Spielberg') ){
        return 1;
      }
    });

    return `Steven Spielberg directed ${dramaSpielbergArray.length} drama movies!`;
  }
}


// Order by title and print the first 20 titles
function orderAlphabetically(movies){

 let titleArray = [];
 movies.forEach( function(element){
   titleArray.push(element.title);
  });
  
  titleArray.sort();

  return titleArray.slice(0,20);
}


// Best yearly rate average



