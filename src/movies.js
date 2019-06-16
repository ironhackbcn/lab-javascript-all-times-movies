/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  let arrayDurationMovies = movies.map(movie => {
    let aux1 = movie.duration;
    let aux = aux1.split(" ", 2);
    let totalMinutes = 0;
    let lasHoras = 0;
    let losMinutos = 0;

    // only hours or only minutes
    if (aux.length === 1) {
      if (aux[0].indexOf('h') != -1) {
        lasHoras = aux[0].slice(0, -1) * 60;
        totalMinutes = lasHoras;
      }
      if (aux[0].indexOf('min') != -1) {
        losMinutos = aux[0].slice(0, -3);
        totalMinutes = parseInt(losMinutos);
      }

    } else {
      lasHoras = parseInt(aux[0].slice(0, -1) * 60);
      losMinutos = parseInt(aux[1].slice(0, -3));
      totalMinutes = lasHoras + losMinutos;
    }

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      rate: movie.rate
    }
  });
  return arrayDurationMovies;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  let average = movies.reduce((sum, movie) => {
    return (sum + movie.rate);
  }, 0);
  average = (average / movies.length).toFixed(2);
  return parseFloat(average);
}


// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let moviesFiltered = movies.filter(movie => movie.genre.indexOf('Drama') != -1);

  let sumRateDramaMovies = moviesFiltered.reduce((sum, movie) => {
    return sum + movie.rate;
  }, 0);

  let averageRateDramaMovies = (sumRateDramaMovies / moviesFiltered.length).toFixed(2);

  if (moviesFiltered.length === 0) {
    return;
  } else {
    return parseFloat(averageRateDramaMovies);
  }
}


// Order by time duration, in growing order
function orderByDuration(movies) {
  movies.sort((a, b) => {
    //a - b
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1
      }
    }
  });
  return movies;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  let moviesFiltered = movies.filter(movie => (movie.genre.indexOf('Drama') != -1) && (movie.director === 'Steven Spielberg'));

  if (movies.length === 0) {
    return undefined;
  }

  return `Steven Spielberg directed ${moviesFiltered.length} drama movies!`;

}


// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let nameMovies = [];
  movies.forEach(movie => {
    nameMovies.push(movie.title)
  });

  nameMovies.sort();

  if (movies < 20) {
    return nameMovies;
  } else {
    return nameMovies.slice(0, 20);
  }
}


// Best yearly rate average


