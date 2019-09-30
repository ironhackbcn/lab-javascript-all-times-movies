/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let duration, hours, minutes = 0;
  let result = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < result.length; i++) {
    if (result[i].duration.match(/h/g) && result[i].duration.match(/min/g)) {
      hours = parseInt(((result[i].duration).replace(/min/ig, '').replace(/h/ig, '').split(' '))[0]);
      minutes = parseInt(((result[i].duration).replace(/min/ig, '').replace(/h/ig, '').split(' '))[1]);
    } else if (!result[i].duration.match(/h/g)) {
      hours = 0;
      minutes = parseInt((result[i].duration).replace(/min/ig, ''));
    } else if (!result[i].duration.match(/min/g)) {
      hours = parseInt((result[i].duration).replace(/h/ig, ''));
      minutes = 0;
    }
    duration = (hours * 60) + minutes;
    result[i].duration = duration;
  }
  return result;
}
// This is awful, there has to be a better way

/* Why doesn't this work?

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let duration, hours, minutes;
  let timeArray = [];
  let movies = array.map(function (movie) {
    if (movie.duration.indexOf("min") < 0) {
      hours = parseInt((movie.duration).replace(/h/ig, ''));
      minutes = 0;
    } else if (movie.duration.indexOf("h") < 0) {
      hours = 0;
      minutes = parseInt(movie.duration.replace(/min/ig, ''));
    } else {
      timeArray = movie.duration.replace(/min/ig, '').replace(/h/ig, '').split(' ');
      hours = parseInt(timeArray[0]);
      minutes = parseInt(timeArray[1]);
    }
    duration = (hours * 60) + minutes;
    movie.duration = duration;
    //console.log(movie);
  });
  return movies;
}

*/

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length > 0) {
    let dramas = getDramas(array).filter(function (movie) {
      return movie.director === "Steven Spielberg";
    });
    return `Steven Spielberg directed ${dramas.length} drama movies!`;
  } else {
    return undefined;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  array = array.sort((a, b) => { return (a.title > b.title) ? 1 : -1 });
  let newArray = []
  array.forEach(function (movie) { newArray.push(movie.title) })
  if (newArray.length >= 20) {
    return newArray.slice(0, 20);
  } else {
    return newArray;
  }
}

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let result = array.reduce((accumulator, currentValue) => accumulator + currentValue.rate, 0);
  return parseFloat((result / array.length).toFixed(2));
}

// Get Drama Movies
function getDramas(array) {
  let dramas = array.filter(function (movie) {
    return movie.genre.indexOf("Drama") !== -1;
  })
  return dramas;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramas = getDramas(array);
  if (dramas.length == 0) {
    return undefined;
  } else {
    return ratesAverage(dramas);
  }
}

// Order by time duration, in growing order
function orderByDuration(array) {
  let newArray = array.map(function (element) {
    return turnHoursToMinutes(element);
  })
  return newArray.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}
// Check sorting here, it looks weird

// Best yearly rate average
function bestYearAvg(array) {
  if (array.length == 0) {
    return undefined;
  } else {
    // Get a new array with only years
    let yearlyRates = [];

    // How is this working??
    const map = new Map();
    for (const item of array) {
      if (!map.has(item.year)) {
        map.set(item.year, true);
        yearlyRates.push({
          year: parseInt(item.year),
          rates: [],
          avgRate: 0
        });
      }
    }

    // Iterate through the movies array and add all rates to the corresponding slot in the yearlyRates array
    for (let i = 0; i < yearlyRates.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (yearlyRates[i].year == array[j].year) {
          yearlyRates[i].rates.push(array[j].rate);
        }
      }
    }

    // Iterate through the yearlyRates array and calculate the rate average
    let avgRate = 0;
    for (let i = 0; i < yearlyRates.length; i++) {
      avgRate = yearlyRates[i].rates.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      yearlyRates[i].avgRate = parseFloat((avgRate / yearlyRates[i].rates.length).toFixed(2));
    }

    yearlyRates = yearlyRates.sort(function (a, b) {
      if (a.avgRate > b.avgRate) return -1;
      if (a.avgRate < b.avgRate) return 1;
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
    });

    console.log(yearlyRates);
    return `The best year was ${yearlyRates[0].year} with an average rate of ${yearlyRates[0].avgRate}`;
  }
}