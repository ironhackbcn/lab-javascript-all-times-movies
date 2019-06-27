/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutesString(string) {
  if(typeof string === 'number') {
    return string;
  }
  var durationInMinutes = '';
  var hours = '';
  var minutes = '';
  var change = false;
  for (var i = 0; i < string.length; i++) {
    if (change) {
      minutes += string[i];
    } else {
      hours += string[i];
    }
    if (string[i] === 'h') {
      change = true;
    }
  }
  if (change === false) {
    durationInMinutes = parseInt(hours.replace(/\D/g, ''));
  } else if (minutes !== '') {
    durationInMinutes = parseInt(hours.replace(/\D/g, '')) * 60 + parseInt(minutes.replace(/\D/g, ''))
  } else {
    durationInMinutes = parseInt(hours.replace(/\D/g, '')) * 60
  }
    console.log('minute',durationInMinutes);
    return durationInMinutes;
}

function turnHoursToMinutes(array) {
  var newArray = array.map(function (object) {
    var newObject = Object.assign({}, object)
    newObject.duration = turnHoursToMinutesString(object.duration);
    return newObject;
  });
  console.log(newArray)
  return newArray;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  var total = array.reduce(function (acc, object) {
    return acc + object.rate;
  }, 0);
  var average = total / array.length;
  return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var sum = 0;
  var total = array.reduce(function (acc, object) {
    if (object.genre.indexOf('Drama') !== -1) {
      sum++;
      return acc + object.rate;
    };
    return acc;
  }, 0);
  if (sum === 0) {
    return;
  }
  var average = total / sum;
  console.log(average.toFixed(2));
  return parseFloat(average.toFixed(2));
}

// Order by time duration, in growing order

function orderByDuration(array) {
  newArray = array;
  turnHoursToMinutes(newArray);
  newArray.sort(function (obj1, obj2) {
    if (obj1.duration - obj2.duration === 0) {
      
    }
    return obj1.duration - obj2.duration;
  })
  return newArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length === 0) {
    return;
  }
  var dramaMovies = array.filter(function(object){
    return object.genre.includes ("Drama");
  });
  var spielbergMovies = dramaMovies.filter(function(object){
    return object.director === "Steven Spielberg";
  });
  if (spielbergMovies === 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  }
  return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var arrayTitles = [];
  array.forEach(function(object){
    arrayTitles.push(object.title);
  });
  arrayTitles.splice(20,1000);
  arrayTitles.sort();
  return arrayTitles;
}

// Best yearly rate average

function bestYearAvg(array) {
  var yearsObj = {}
  array.forEach(function(object){

    yearsObj.year = object.year;
  });
  yearsArr.forEach(object)
}


var newObject = Object.assign({}, object)



//1. array de objetos con key year.
//2. añadir key peliculas con array de objetos de ese año.
//3. añadir key average rate que hace funcion ratesAverage de la array del punto 2.
//4. devolver year de la más alta
