/* eslint no-restricted-globals: 'off' */

function turnHoursToMinutes(array) {
  var newArray = array.map(function (movie) {
    var hours = movie.duration;
    if (hours.includes('h') && !hours.includes('min')) {
      var onlyHours = hours.split("h");
      var onlyHoursToMinutes = parseInt(onlyHours[0]) * 60;
      return { duration: onlyHoursToMinutes };
    }
    if (hours.includes('h') && hours.includes('min')) {
      var hoursWithoutH = hours.split("h");
      var hoursToMinutes = parseInt(hoursWithoutH[0]) * 60;
      var min1 = hours.split(" ");
      var splittedMin = parseInt(min1[1]);

      return { duration: hoursToMinutes + splittedMin };
    } else if (hours.includes('h')) {
      var hourWithoutMin = hours.split("h");
      return { duration: Number(hourWithoutMin[0]) };
    } else {
      var onlyMinutes = parseInt(hours);
      return { duration: onlyMinutes }
    }

  });
  return newArray;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
  var totalRates = arr.reduce(function (accRates, movie) {
    accRates.push(movie.rate);
    return accRates;
  }, []);

  var sumRates = totalRates.reduce(function (accRates, rate) {
    return accRates + rate;
  }, 0);

  var average = sumRates / totalRates.length;
  return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
  var filter = arr.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  if (filter.length > 0) return ratesAverage(filter);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  var counter = 0;

  arr.forEach(function (movie) {
    if (movie.genre.includes('Drama') && movie.director === 'Steven Spielberg') {
      counter++;
    }
  })
  return 'Steven Spielberg directed ' + counter + ' drama movies!';
}


// Order by title and print the first 20 titles

function orderAlphabetically (arr) {
  arr.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  var top20Movies = [];
  var limit = 20;
  if (arr.length < 20) {
    limit = arr.length;
  }
  for (var i = 0; i < limit; i++) {
    top20Movies.push(arr[i].title);
  }
  return top20Movies;
}

// Best yearly rate average
