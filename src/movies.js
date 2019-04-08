/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate averag

function turnHoursToMinutes(array) {
  const newArray = array.map(function(element){
 //don`t know if i can split string by 2 parameters?
  })
  return newArray;
}


function ratesAverage (array){
  
newArray = array.reduce( (accum, element) =>
     accum + element.rate, 0) / array.length;

     return parseFloat(newArray.toFixed(2));
 
 };
 

function dramaMoviesRate (array){
  var array2 = [];
  array.forEach(function(element){
    if (element.genre.includes("Drama")) {
     array2.push(element);
  }
})

if (array2.length === 0){
  return undefined;
}
else {
return ratesAverage(array2);
}
};



function orderByDuration (array) {
  var durArray = array.sort(function (a,b){
    if ( a.duration < b.duration) {
      return -1;
    }
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration == b.duration) {
      if (a.title > b.title){
        return 1;
      }
      if (a.title < b.title){
        return -1;
      }
    }
  });

  return durArray;
}



let newArray=0;
function howManyMovies (array){
  if (array.length ===0){
    return undefined; 
  }
  else {
  let newArray2 = array.filter( function (element){
    return element.director === "Steven Spielberg" && element.genre.includes("Drama"); //warum nicht nach return break?
  });

  if (newArray2.length == 0) {
    return "Steven Spielberg directed 0 drama movies!"
  }
  else {  return "Steven Spielberg directed " + newArray2.length + " drama movies!";
  }
}
}


function orderAlphabetically (array) {
  let newArray3 = array.map(function(element){
    return element.title;
  });

  newArray3.sort();

  if (newArray3.length > 20){
    newArray3.length = 20;
  }

  return newArray3;
}



