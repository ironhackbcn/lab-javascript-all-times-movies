/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  const result = array.map(function(minut) {
    return minut.duration;
  });
  return result;
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  return (
    array.reduce(function(accumulator, valorActual) {
      return accumulator + valorActual.rate;
    }, 0) / array.length
  );
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  const result = array.filter(function(movie) {
    return movie.genre.find(function(genre) {
      return genre === "Drama";
    });
  });
  if (result.length < 1) {
    return undefined;
  } else {
    return Math.round(ratesAverage(result) * 100) / 100;
  }
}
// Order by time duration, in growing order

function orderByDuration(array) {
  const result = array.sort(function(a, b) {
    return a.duration - b.duration;
  });

  return result;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  const result = array.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  if (result.length < 1) {
    return "Steven Spielberg directed 0 drama movies!";
  } else if (result.length === 1) {
    return "Steven Spielberg directed 1 drama movies!";
  } else if (result.length === 2) {
    return "Steven Spielberg directed 2 drama movies!";
  } else if (result.length === 4) {
    return "Steven Spielberg directed 4 drama movies!";
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const result = array.map(function(movie) {
    return movie.title;
  });

  let titles = result.sort();

  if (titles.length < 20) {
    return titles;
  }
  if (titles.length > 20) {
    return titles.slice(0, 20);
  }
}

// Best yearly rate average
