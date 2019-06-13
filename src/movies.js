/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  moviesTime = movies.map(function(movie) {
    var newMovie = {};
    newMovie = JSON.parse(JSON.stringify(movie));
    newMovie.duration = movie.duration.split(" ");
    //console.log(newMovie.duration);
    newMovie.duration = newMovie.duration.reduce(function(ac, position) {
      let min = 0;
      if (position.indexOf("h") == -1) {
        min = parseInt(position);
      } else if (position.indexOf("min") == -1) {
        min = parseInt(position) * 60;
      }
      return ac + min;
    }, 0);

    return newMovie;
  });
  //console.log(moviesTime);
  return moviesTime;
}
newMoviesWithTime = turnHoursToMinutes(movies);
console.log(newMoviesWithTime);

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const sumaRates = movies.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.rate;
  }, 0);
  return Math.round((sumaRates / movies.length) * 100) / 100;
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

const genre = "Drama";
console.log(genre);

function filterGenre(movies, genero) {
  const moviesByGenre = movies.filter(function(element) {
    return element.genre.indexOf(genero) != -1;
  });
  return moviesByGenre;
}

let dramaMovies = filterGenre(movies, genre);
console.log(dramaMovies);

console.log(dramaMoviesRate(dramaMovies));

function dramaMoviesRate(movies) {
  const dramaMovies = filterGenre(movies, genre);

  if (dramaMovies.length != 0) {
    return ratesAverage(dramaMovies);
  }
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  movies.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });
  return movies;
}

console.log(orderByDuration(newMoviesWithTime));

// How many movies did STEVEN SPIELBERG
const director = "Steven Spielberg";

function howManyMovies(movies) {
  if (movies.length > 0) {
    let phrase = "";

    const moviesDirector = movies.filter(function(movie) {
      return movie.director.toUpperCase() === director.toUpperCase();
    });

    const moviesByDirectorAndGenre = filterGenre(moviesDirector, genre);
    if (moviesByDirectorAndGenre.length >= 0) {
      phrase +=
        director +
        " directed " +
        moviesByDirectorAndGenre.length +
        " drama movies!";
      return phrase;
    }
  }
}

console.log(howManyMovies(movies));

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const moviesToOrder = [];
  movies.forEach(function(movie) {
    moviesToOrder.push(movie.title);
  });
  ordered = moviesToOrder.sort().slice(0, 20);
  return ordered;
}

ordered = orderAlphabetically(movies);
console.log(ordered);

// Best yearly rate average

function bestYearAvg(movies) {
  let whatToReturn = "";
  let moviesYearAndAverage = [];
  let averageYear = {
    year: "",
    average: ""
  };
  console.log(
    `El objeto averageYear vacío: Sus keys son: ${Object.keys(
      averageYear
    )} y valen: [ ${averageYear.year} ] y : [ ${averageYear.average} ]`
  );
  console.log(averageYear);
  // Hasta aquí he creado el objeto vacío correctamente

  let moviesAux = JSON.parse(JSON.stringify(movies));
  console.log(`Todas las peliculas :`);
  console.log(moviesAux);

  if (moviesAux.length === 0) {
    return console.log(`No tengo peliculas`);
  } else {
    console.log(`Tengo peliculas`);
    let index = 0;
    while (moviesAux.length != 0) {
      // while (index != 2) {
      moviesByYear = moviesAux.filter(function(element) {
        return element.year === moviesAux[0].year;
      });
      // index++;
      console.log(moviesByYear);
      averageYear.year = moviesByYear[0].year;
      averageYear.average = ratesAverage(moviesByYear);
      console.log(
        `El objeto averageYear NUEVO: Sus keys son: ${Object.keys(
          averageYear
        )} y valen: [ ${averageYear.year} ] y : [ ${averageYear.average} ]`
      );
      console.log(averageYear);
      console.log(moviesYearAndAverage);
      // moviesYearAndAverage[index].year = averageYear.year;
      // moviesYearAndAverage[index].average = averageYear.average;
      moviesYearAndAverage.push({
        year: averageYear.year,
        average: averageYear.average
      });
      console.log(moviesYearAndAverage);
      for (let indexBorrar = 0; indexBorrar < moviesAux.length; indexBorrar++) {
        if (moviesAux[indexBorrar].year === averageYear.year) {
          moviesAux.splice(indexBorrar, 1);
          indexBorrar--;
        }
      }
      console.log(moviesAux);
      console.log(`se ha modificado?`);
      console.log(movies);
      // moviesAux.sort(compare);
      console.log(moviesYearAndAverage);
      index++;
    }

    moviesYearAndAverage.sort(orderByYear).sort(orderByAverage);

    whatToReturn += `The best year was ${
      moviesYearAndAverage[0].year
    } with an average rate of ${moviesYearAndAverage[0].average}`;
    return whatToReturn;
  }
}

function orderByYear(a, b) {
  let comparison = 0;
  // console.log(a);
  // console.log(b);
  if (a.year > b.year) {
    comparison = 1;
  } else if (a.year < b.year) {
    comparison = -1;
  }
  return comparison;
}
function orderByAverage(a, b) {
  let comparison = 0;
  if (a.average < b.average) {
    comparison = 1;
  } else if (a.average > b.average) {
    comparison = -1;
  }
  return comparison;
}

bestYearAvg(movies);

// moviesUnordered.sort(orderByYear);
// console.log(moviesUnordered);

// moviesUnordered.sort(orderByAverage);
// console.log(moviesUnordered);
// console.log(
//   `El mejor año es: ${moviesUnordered[0].year} con un average de: ${
//     moviesUnordered[0].average
//   }`
// );

// function bestYear(movies) {
//   let yearsRate = { year: "", average: 0 };
//   let moviesByYear = [];
//   let totalMoviesByYear = [];
//   let bestYear;
//   let bestAverage;
//   movies.forEach(function(movie) {
//     moviesByYear = movies.filter(function(element) {
//       return element.year === movie.year;
//     });
//     console.log(
//       `Esto es el objeto yearsRate ${yearsRate.year}, ${yearsRate.average}`
//     );
//     console.log(`Esto es el array de peliculas por año `);
//     console.log(moviesByYear);
//     console.log(moviesByYear[0].year);
//     console.log(ratesAverage(moviesByYear));
//     yearsRate.year = movie.year;
//     yearsRate.average = ratesAverage(moviesByYear);
//     //console.log(yearsRate);
//     console.log(
//       `Despúes de asignar al objeto yearsRate: Esto es el objeto yearsRate ${
//         yearsRate.year
//       }, ${yearsRate.average}`
//     );
//     console.log(`Evalucacion del IF:`);
//     console.log(totalMoviesByYear.indexOf(yearsRate));
//     if (totalMoviesByYear.indexOf(yearsRate) === -1) {
//       totalMoviesByYear.push(yearsRate);
//       console.log("New collection is : ");
//       console.log(totalMoviesByYear);
//     } else if (totalMoviesByYear.indexOf(yearsRate) > -1) {
//       console.log(yearsRate + " already exists in the collection.");
//     }
//   });
//   console.log(totalMoviesByYear);
// }
// console.log(movies);
// bestYear(movies);
