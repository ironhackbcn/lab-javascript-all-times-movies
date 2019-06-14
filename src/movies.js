/* eslint no-restricted-globals: 'off' */

// Get the average of all rates with 2 decimals
function ratesAverage(arrMovies) {
  let count = arrMovies.reduce(function(oldValue, newValue) {
    return { rate: oldValue.rate + newValue.rate };
  });

  return parseFloat((count.rate / arrMovies.length).toFixed(2));
}

function dramaMoviesRate(arrMovies) {
  let dramaMovies = arrMovies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return;
  }
  let avg = ratesAverage(dramaMovies);
  //console.log(avg);
  return avg;
}

function howManyMovies(arrMovies) {
  if (arrMovies.length === 0) {
    return;
  }
  let dramaStevenSpilbergMovies = arrMovies.filter(function(movie) {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  if (dramaStevenSpilbergMovies.length === 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  }
  return `Steven Spielberg directed ${
    dramaStevenSpilbergMovies.length
  } drama movies!`;
}

function orderAlphabetically(arrMovies) {
  let arrTitles = arrMovies.map(function(element) {
    return element.title;
  });

  return arrTitles.sort().slice(0, 20);
}

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {
  const moviesWithMinutes = arrMovies.map(function(element) {
    return {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: getTime(element.duration),
      genre: element.genre,
      rate: element.rate
    };
  });
  return moviesWithMinutes;
}
function getTime(hours) {
  let hour = 0;
  let min = 0;
  if (hours.includes(" ")) {
    let arrHours = hours.split(" ");
    hour = parseInt(arrHours[0].replace("h", ""));
    min = parseInt(arrHours[1].replace("min", ""));
  } else {
    if (hours.includes("h")) {
      hour = parseInt(hours.replace("h", ""));
    } else {
      min = parseInt(hours.replace("min", ""));
    }
  }

  return hour * 60 + min;
}

function orderByDuration(arrMovies) {
  arrMovies.sort(compareDurations);
  arrMovies.sort(compareTitles);
  return arrMovies;
}

function compareDurations(element1, element2) {
  let comparer = 0;
  if (element1.duration > element2.duration) {
    comparer = 1;
  } else if (element1.duration < element2.duration) {
    comparer = -1;
  }
  return comparer;
}
function compareTitles(element1, element2) {
  let comparer = 0;
  try {
    if (element1.duration === element2.duration) {
      if (element1.title.toLowerCase() > element2.title.toLowerCase()) {
        comparer = 1;
      } else if (element1.title.toLowerCase() < element2.title.toLowerCase()) {
        comparer = -1;
      }
    }
  } catch (error) {
    //console.log(element1);
  }

  return comparer;
}

function bestYearAvg(arrMovies) {
  let arrYears = new Array();
  if (arrMovies.length === 0) {
    return;
  }
  arrMovies.forEach(movie => {
    if (!findYear(arrYears, movie.year)) {
      arrYears.push({
        year: movie.year,
        avg: ratesAverage(getMoviesYear(arrMovies, movie.year))
      });
    }
  });
  arrYears.sort(compareAverage);
  arrYears.sort(compareYears);
  return `The best year was ${arrYears[0].year} with an average rate of ${
    arrYears[0].avg
  }`;
  console.log(arrYears);
}

function getMoviesYear(arrMovies, year) {
  return arrMovies.filter(function(movie) {
    return movie.year === year;
  });
}
function findYear(arrYears, year) {
  let found = arrYears.find(function(element) {
    return element.year === year;
  });
  return found;
}
function compareAverage(element1, element2) {
  let comparer = 0;
  if (element1.avg < element2.avg) {
    comparer = 1;
  } else if (element1.avg > element2.avg) {
    comparer = -1;
  }
  return comparer;
}
function compareYears(element1, element2) {
  let comparer = 0;
  if (element1.avg === element2.avg) {
    if (element1.year > element2.year) {
      comparer = 1;
    } else if (element1.year < element2.year) {
      comparer = -1;
    }
  }
  return comparer;
}
