/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(hoursToMinutes) {
    return hoursToMinutes.map(function(everyFilm) {
      let hourInMinutes = 0;
      let minutes = 0;
      if (everyFilm.duration.indexOf(" ") === -1) {
        if (everyFilm.duration.indexOf("min") === -1) {
          hourInMinutes = parseInt(everyFilm.duration.split("h")[0]);
          if (hourInMinutes > 0) hourInMinutes *= 60;
        } else {
          minutes = parseInt(everyFilm.duration.split("min")[0]);
        }
      } else {
        hourInMinutes = parseInt(everyFilm.duration.split("h")[0]);
        if (hourInMinutes > 0) hourInMinutes *= 60;
        minutes = parseInt(
          everyFilm.duration.substring(
            everyFilm.duration.indexOf(" ") + 1,
            everyFilm.duration.indexOf("min")
          )
        );
      }
      let returned = {};
      returned = JSON.parse(JSON.stringify(hoursToMinutes)); //A copy of object
      returned.duration = parseInt(hourInMinutes + minutes);
      return returned;
    });
  }
  
  // Get the average of all rates with 2 decimals
  
  function ratesAverage(rates) {
    // if (rates.length===1) return parseFloat(rates.rate);
    return (
      rates.reduce(function(accumulatorRate, currentRate) {
        if (currentRate.rate === "") return accumulatorRate;
        else return accumulatorRate + parseFloat(currentRate.rate);
      }, 0.0) / rates.length
    );
  }
  
  // Get the average of Drama Movies
  function dramaMoviesRate(ratesDrama) {
    let counterQuantityOfDramas = 0;
    let dramaFilmsSum = 0;
    if (ratesDrama.length === 1 && ratesDrama[0].genre.indexOf("Drama") != -1) {
      return parseFloat(ratesDrama[0].rate);
    }
    dramaFilmsSum = ratesDrama.reduce(function(accumulatorRate, currentRate) {
      if (currentRate.genre.indexOf("Drama") != -1) {
        counterQuantityOfDramas++;
        if (currentRate.rate != "") {
          return parseFloat(currentRate.rate) + accumulatorRate;
        }
      }
      return accumulatorRate;
    }, 0);
    if (counterQuantityOfDramas > 0) {
      return Math.floor((dramaFilmsSum / counterQuantityOfDramas) * 100) / 100;
    } else return undefined;
  }
  
  // Order by time duration, in growing order
  
  function orderByDuration(unOrderedMovies) {
    return unOrderedMovies.sort(function(firstMovie, nextMovie) {
      if (firstMovie.duration < nextMovie.duration) return -1;
      else if (firstMovie.duration > nextMovie.duration) return 1;
      else {
        return firstMovie.title.localeCompare(nextMovie.title);
      }
    });
  }
  
  // How many movies did STEVEN SPIELBERG
  
  function howManyMovies(spielbergMovies) {
    let result = [];
    if (spielbergMovies.length === 0) {
      return undefined;
    }
    result = spielbergMovies.filter(function(directedBy) {
      return directedBy.director === "Steven Spielberg";
    });
    if (result.length === 0) {
      return "Steven Spielberg directed 0 drama movies!";
    } else {
      return `Steven Spielberg directed ${
        result.filter(function(dramaDirected) {
          return dramaDirected.genre.indexOf("Drama") != -1;
        }).length
      } drama movies!`;
    }
  }
  
  // Order by title and print the first 20 titles
  function orderAlphabetically(allTheMoviesAlphabeticalSort) {
    return allTheMoviesAlphabeticalSort
      .sort(function(firstMovie, nextMovie) {
        return firstMovie.title.localeCompare(nextMovie.title);
      })
      .map(function(onlyTitleMovie) {
        return onlyTitleMovie.title;
      })
      .slice(0, 20);
  }
  
  // Best yearly rate average
  
  function bestYearAvg(betterMovie) {
    let year = 0;
    let rate = 0;
    let qty = 0;
    let completeArrayMovie = [];
    betterMovie.forEach(function(movie) {
      completeArrayMovie.push({
        year: movie.year,
        rate: movie.rate,
        duplicate: false
      });
    });
    console.log(completeArrayMovie);
  
    if (betterMovie.length === 0) return undefined;
    if ((betterMovie.length = 1))
      return `The best year was ${betterMovie[0].year} with an average rate of ${
        betterMovie[0].rate
      }`;
    for (let i = 0; i < completeArrayMovie.length; i++) {
      for (let j = 1; j < completeArrayMovie.length; j++) {
        if (
          parseInt(completeArrayMovie[i].year) ===
            parseInt(completeArrayMovie[j].year) &&
          completeArrayMovie[j].duplicate === false &&
          completeArrayMovie[i].duplicate === false
        ) {
          completeArrayMovie[j].duplicate = true;
  
          if (completeArrayMovie[i].duplicate === false) {
            completeArrayMovie[i].duplicate = true;
          }
        }
      }
    }
    console.log(completeArrayMovie);
    completeArrayMovie.forEach(function(movie) {
      if (movie.duplicate != false) {
        qty++;
        rate += movie.rate;
        if (parseInt(movie.year) < year) year = parseInt(movie.year);
      }
    });
    // console.log(completeArrayMovie);
    rate /= qty;
    return `The best year was ${year} with an average rate of ${year}`;
  }
  
