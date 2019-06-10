/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

  var newMovies = movies.map(function (value) {

    var newElement = value.duration.replace(/ /g, "");
    var h = 0;
    var m = 0;
    var elementLength = newElement.length;

    for (i = 0; i < elementLength; i++) {
      if (newElement[i] == "h") {
        var h = i;
      }
      if (newElement[i] == "m") {
        var m = i;
      }
    }

    if (h == 0) {
      var onlyMinutes = Number(newElement.slice(0, m))
      value.duration = onlyMinutes
    } else if (m == 0) {
      var onlyHours = Number(newElement.slice(0, h)) * 60;
      value.duration = onlyHours
    } else {
      var onlyHours = Number(newElement.slice(0, h)) * 60;
      var onlyMinutes = Number(newElement.slice(h + 1, m))
      value.duration = onlyHours + onlyMinutes;
    }
    return value
  })

  return newMovies
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

  let totalNum = movies.reduce(function (accumulator, currentValue) {
    if (isNaN(currentValue.rate)) {
      return accumulator + 0;
    } else {
      return accumulator + currentValue.rate;
    }
  }, 0);

  return (totalNum / movies.length);

}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

  var moviesDrama = movies.filter(movie => movie.genre.indexOf("Drama") >= 0);

  if (moviesDrama.length == 0) {
    return undefined
  }

  var averageMoviesDrama = ratesAverage(moviesDrama);

  if (averageMoviesDrama % 1 != 0) {
    return (parseFloat(averageMoviesDrama).toFixed(2) * 100) / 100;
  } else if (averageMoviesDrama % 1 == 0) {
    return averageMoviesDrama
  }

}

// Order by time duration, in growing order

function orderByDuration(movies) {

  let orderNewMovies = movies.sort(function (a, b) {
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration == b.duration) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
  });
  console.log(orderNewMovies)
  return orderNewMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined
  }

  var moviesDrama = movies.filter(movie => movie.genre.indexOf("Drama") >= 0)
  var moviesStevenSpielberg = moviesDrama.filter(movie => movie.director.indexOf("Steven Spielberg") >= 0)

  if (moviesStevenSpielberg.length == 0) {
    return ('Steven Spielberg directed 0 drama movies!')
  } else if (moviesStevenSpielberg.length >= 1) {
    return (`Steven Spielberg directed ${moviesStevenSpielberg.length} drama movies!`)

  }

} // Order by title and print the first 20 titles

function orderAlphabetically(movies) {

  let titlesAllMovies = []

  movies.forEach(movie => {
    if (typeof movie.title == "string") {
      titlesAllMovies.push(movie.title)
    }
  });
  console.log("try to print all titles " + titlesAllMovies);

  let alfebeticTitlesAllMovies = titlesAllMovies.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
  console.log("try to print all titles in alphabetic order " + alfebeticTitlesAllMovies);

  if (alfebeticTitlesAllMovies.length <= 20) {
    return alfebeticTitlesAllMovies;
  } else {
    return alfebeticTitlesAllMovies.slice(0, 20);
  }

}


// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length == 0) {
    return undefined
  } else if (movies.length == 1) {
    return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`
    movies[0].rate / 1;
  } else {

    let orderByYear = movies.sort(function (a, b) {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0;
    })


    let firstYear = orderByYear[0].year;
    let lastYear = orderByYear[orderByYear.length - 1].year;

    let averageMoviesYearArr = []
    for (i = firstYear; i <= lastYear; i++) {
      console.log(i);
      var moviesByYear = movies.filter(movie => movie.year.indexOf(i) >= 0);
      console.log(moviesByYear);
      var averageMoviesYear = ratesAverage(moviesByYear);
      if (isNaN(averageMoviesYear) != 1) averageMoviesYearArr.push({
        year: i,
        average: averageMoviesYear
      })

    }

    let orderByYearAver = averageMoviesYearArr.sort(function (a, b) {
      if (a.average < b.average) {
        return -1;
      }
      if (a.average > b.average) {
        return 1;
      }
      if (a.average == b.average) {
        if (a.year > b.year) {
          return -1;
        }
        if (a.year < b.year) {
          return 1;
        }
        return 0;
      }
    })
    return `The best year was ${orderByYearAver[orderByYearAver.length-1].year} with an average rate of ${orderByYearAver[orderByYearAver.length-1].average}`

  }
}