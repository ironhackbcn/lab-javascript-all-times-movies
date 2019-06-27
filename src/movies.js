/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
  var formatTime = movies.map(function(movie) {
    var durationArray = movie.duration.replace(/[hmin]/g, '').split(" ");
    // Create a copy of the object (otherwise, movie.duration change the original object property)
    var obj = Object.assign({}, movie, {
      // In case the array has only one element, it means it's minutes, or hour. 
      duration: (durationArray.length === 1) ? (durationArray[0].length === 1) ? parseInt(durationArray[0]) * 60 : parseInt(durationArray[0])
                                             : (parseInt(durationArray[0]) * 60 + parseInt(durationArray[1])),
    });
    return obj;
  })
  return formatTime;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  if(movies.length === 0){
    return undefined;
  }
  var total = movies.reduce(function(acc,current){
    acc += current.rate;
    return acc;
  },0);

  total = total / movies.length;
  return parseFloat(total.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var filterMovies = movies.filter(function(movie) {
    var filterGenres = movie.genre.filter(function(genre) {
      return genre === "Drama"; 
    })
    //console.log(filterGenres);
    return filterGenres.length > 0;
  })
  console.log(filterMovies);
  return ratesAverage(filterMovies);
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  //var arrayTimeFormat = turnHoursToMinutes(movies);
  var sortedArray = movies.sort(function(a,b) {
    // In case the same duration, order by title
    if(a.duration===b.duration){
      var res = (a.title<b.title) ? -1 : 1;
      return res;
    }
    if(a.duration<b.duration) {
      return -1;
    }
    if(a.duration>b.duration) {
      return 1;
    }
    return 0;
  }) 
  var durationArray = sortedArray.map(function(movie) {
    // Chack if movie has the title property (because of the weird error of Jasmine)
    var obj = (movie.hasOwnProperty('title')) ? {title: movie.title, duration: movie.duration} : {duration: movie.duration} 
    return obj
  })
  return durationArray;
}

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if(movies.length === 0){
    return undefined;
  }
  var spielbergMovies = movies.filter(function(movie) {
    var filterGenres = movie.genre.filter(function(genre) {
      return genre === "Drama"; 
    })
    if(filterGenres.length > 0 && movie.director === "Steven Spielberg"){
      return true;
    }else {
      return false;
    }
  });
  return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
};

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var sortedArray = movies.sort(function(a,b) {
    if(a.title < b.title) {
      return -1;
    }
    if(a.title > b.title) {
      return 1;
    }
    return 0;
  })
  var titlesArray = sortedArray.map(function(movie) {
    return movie.title;
  })
  return titlesArray.splice(0, 20);
}


// Best yearly rate average

function bestYearAvg(movies) {
  if(movies.length === 0){
    return undefined;
  }
  // Create an array of years
  var years = movies.reduce(function(acc, current) {
    if(!acc.includes(current.year)){
      acc.push(current.year);
    }
    return acc;
  }, [])
  // create an array with object {year, rateAverage}
  var yearsArray = years.map(function(year) {
    var yearArray = movies.filter(function(movie) {
      return movie.year === year;
    })
    return {year: yearArray[0].year, rateAvg: ratesAverage(yearArray)};
  })
  // Get the best rate average's year
  var orderedRate = yearsArray.sort(function(a,b) {
    if(b.rateAvg - a.rateAvg === 0) {
      return a.year - b.year;
    }
    return b.rateAvg - a.rateAvg;
  })

  return `The best year was ${orderedRate[0].year} with an average rate of ${orderedRate[0].rateAvg}`
}
