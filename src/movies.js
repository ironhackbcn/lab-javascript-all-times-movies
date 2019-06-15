// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var movieMinutes = movies.map(function(movie) {
    if (movie.duration.length < 3) {
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: parseInt(movie.duration) * 60,
        genre: movie.genre,
        rate: movie.rate
      };
    } else if (movie.duration.length < 6) {
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: parseInt(movie.duration),
        genre: movie.genre,
        rate: movie.rate
      };
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration:
        parseInt(movie.duration) * 60 +
        parseInt(movie.duration.charAt(3) + movie.duration.charAt(4)),
      genre: movie.genre,
      rate: movie.rate
    };
  });

  return movieMinutes;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var ratesSum = movies.reduce(function(sum, movie) {
    return (sum += movie.rate);
  }, 0);
  return parseFloat((ratesSum / movies.length).toFixed(2));
  console.log(parseFloat((ratesSum / movies.length).toFixed(2)));
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.indexOf("Drama") > -1;
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

dramaMoviesRate(movies);

// Order by time duration, in growing order

function orderByDuration(movies) {
  if (movies.length === 1) {
    return movies;
  } // Ordeno primero por título porque hay una condición de que si tienen la misma duración tienen que estar ordenadas por título
  var byTitleMovies = movies.sort(function(a, b) {
    var titA = a.title.toUpperCase();
    var titB = b.title.toUpperCase();
    if (titA < titB) {
      return -1;
    }
    if (titA > titB) {
      return 1;
    }
    return 0;
  });
  return turnHoursToMinutes(byTitleMovies).sort(function(a, b) {
    return a.duration - b.duration;
  });
}

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  } else {
    var spielbergMovies = movies.filter(function(movie) {
      return movie.director === "Steven Spielberg";
    });
    var spielbergDramaMovies = spielbergMovies.filter(function(movie) {
      return movie.genre.indexOf("Drama") > -1;
    });
  }
  return `Steven Spielberg directed ${
    spielbergDramaMovies.length
  } drama movies!`;
}

howManyMovies(movies);

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var first20Movies = [];
  var movieTitles = movies.map(function(movie) {
    return movie.title;
  });
  if (movieTitles.length < 21) {
    movieTitles.forEach(function(movie) {
      first20Movies.push(movie);
    });
  } else
    for (var i = 0; i < 20; i++) {
      first20Movies.push(movieTitles[i]);
    }
  return first20Movies.sort(function(a, b) {
    var titA = a.toUpperCase();
    var titB = b.toUpperCase();
    if (titA < titB) {
      return -1;
    }
    if (titA > titB) {
      return 1;
    }
    return 0;
  });
}

orderAlphabetically(movies);

// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return undefined;
  } else if (movies.length === 1) {
    console.log(
      `The best year was ${movie.year} with an average rate of ${movie.rate}`
    );
  }
}

// No he tenido tiempo para acabar el bonus
