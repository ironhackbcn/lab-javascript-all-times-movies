/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {

  let moviesWithNiceTime = moviesArray.map(movie => {
    let modifiedMovie = Object.create(movie);
    //durationArray contains either:
    // a) 2h 22 min
    // b) 2h
    // c) 55 min
    let durationArray = modifiedMovie.duration.split(' ');
    let durationInMinutes;
    if (durationArray[0] && durationArray[0].includes('h')) {
      durationInMinutes = parseInt(durationArray[0]) * 60
    } else if (durationArray[0] && durationArray[0].includes('min')) {
      durationInMinutes = parseInt(durationArray[0])
    }

    if (durationArray[1] && durationArray[1].includes('min')) {
      durationInMinutes = durationInMinutes + parseInt(durationArray[1])
    }

    modifiedMovie.duration = durationInMinutes;
    return modifiedMovie;
  });

  return moviesWithNiceTime;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {

  const ratesAverage = moviesArray.reduce((accumulator, element) => {
    return accumulator + element.rate;
  }, 0);
  const averageRate = ratesAverage / moviesArray.length;
  // return with 2 decimals
  // return Math.round(averageRate * 100) / 100; ??
  return parseFloat(averageRate.toFixed(2))
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {

  const dramaMoviesArray = moviesArray.filter(movie => movie.genre.includes('Drama'));
  console.log(ratesAverage(dramaMoviesArray));

  if (dramaMoviesArray.length === 0) {
    return undefined
  } else {
    return ratesAverage(dramaMoviesArray);
  }

}
// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  let sortedArray = moviesArray.sort((a, b) => {
    if (a.duration < b.duration) {
      return -1
    } else if (a.duration > b.duration) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0;
      }
    }
  });
  return sortedArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    ;
    return undefined
  }
  const spielbergArray = moviesArray.filter(movie => (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')));

  if (spielbergArray.length === 0) {
    return "Steven Spielberg directed 0 drama movies!"
  } else {
    return "Steven Spielberg directed " + spielbergArray.length + " drama movies!"
  }
}


// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

  let titleArray = moviesArray.map(movie => movie.title);
  let sortedArray = titleArray.sort();

  if (sortedArray.length > 20) {
    return sortedArray.slice(0, 20);
  } else {
    return sortedArray;
  }

}



// Best yearly rate average



