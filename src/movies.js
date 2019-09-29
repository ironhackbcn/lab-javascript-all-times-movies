/* eslint no-restricted-globals: 'off' */

// EXERCISE 1:
//Turn duration of the movies from hours to minutes 

// First we design a function that turns '1h 22min' into 82:

function changingTime (string){
    let horas = minutes = 0;
    if (string.indexOf("h") !== -1){
      horas = string.split("h")[0] * 60
      string = string.split("h")[1]
    }
    if (string.indexOf("min") !== -1){
      minutes = string.split("min")[0] * 1
    }
    return horas + minutes
  }

  // Now we design the final function; we use a .map() to change the old duration to the new one using the previous function; 
  
let turnHoursToMinutes0 = array => {
    var newArray = array.map(function(movie, index){
      movie.duration = changingTime(movie.duration)
      return movie
  })
  console.log(newArray)
  return newArray
}

// Jasmine was not happy enough with my previous function, so Uros improved it in the following way:
let turnHoursToMinutes = array => {
    var newArray = array.map(function(movie, index){
        var duration = changingTime(movie.duration)
        return { duration: duration }
  })
  console.log(newArray)
  return newArray
}

// We could also take an approach using a for loop instead of the .map
function turnHoursToMinutes3 (array){
  var newArray = JSON.parse( JSON.stringify( array ) );
  for(i=0; i<array.length; i++){
      newArray[i].duration = changingTime(newArray[i].duration)
  }
  return newArray
}

//EXERCISE 2:
// Get the average of all rates with 2 decimals 

function numberTo2Decimals (number){
    return Math.round(number * 100) / 100
}

function ratesAverage (array){
    if (array.length === 0) {return undefined}
    let sum = array.reduce(function(a,b){
      return (a + b.rate)
    }, 0 )
    let avg = sum / array.length
    return numberTo2Decimals(avg)
}

//EXERCISE 3:
// Get the average of Drama Movies

//First we design a function that returns only the drama Movies

function dramaMoviesFilter (array){
    let newArray = array.filter(function(object){
        return (object.genre.indexOf("Drama") !== -1)
    })
    return newArray
}

//we can also do it without .filter 
function dramaMoviesFilter2 (array){ 
    let newArray = []
    for(i=0; i<array.length; i++){
      for(j=0; j<array[i].genre.length; j++){
        if (array[i].genre[j] === "Drama"){
          newArray.push(array[i])
        }
      }
    }
    return newArray
}

//Finally we create a function that returns the Average rate of drama movies using the function of EXERCISE 2

function dramaMoviesRate (array){
    return ratesAverage(dramaMoviesFilter(array));
}


// EXERCISE 4:
// Order by time duration, in growing order

function orderArrayAlphabetically2 (array){
    let newArray = array.sort(function (a, b) {
        {return a.title.toUpperCase() - b.title.toUpperCase();}})
    return newArray;
}

function orderByDuration (array){
let newArray = orderArrayAlphabetically2(array);
let newArray2 = newArray.sort(function (a, b) {
    {return a.duration - b.duration;
  }})
return newArray2;
}

//EXERCISE 5:
// How many movies did STEVEN SPIELBERG

function StevenSpielbergFilter (array){
    if (array.length === 0) {return undefined}
    let newArray = array.filter(array => array.director === "Steven Spielberg")
     return newArray
}

function howManyMovies (array){
    if(array.length === 0){return undefined}
    let newArray = dramaMoviesFilter(StevenSpielbergFilter(array));
    return `Steven Spielberg directed ${newArray.length} drama movies!`
}

//EXERCISE 6:
// Order by title and print the first 20 titles

function orderAlphabetically (array){
    let newArray = array.sort(function (a, b) {
        if(a < b){return -1}
        if(a > b){return 1}
        else{return 0}
        })
    let onlyTitle =[]
    for (i=0; i<array.length; i++){
        onlyTitle.push(newArray[i].title)
    }
    
    return onlyTitle;
}

// EXERCISE 7: BONUS
// Best yearly rate average

// This function creates a new array in which there are arrays with the films of that year.
let separateMoviesByYears = (array) => {
    newArray = [];
    for (i=0; i<2019; i++){
      newArray.push(array.filter( object => object.year === `${i}`))
    }
    return newArray
  }

// This second function retunrs an array of 2019 elements. In each position of the array there is the average rate of the movies. ie: console.log(averageRatePerYear(movies)) <-- [0, 9, 0 ...(up to 2019 elements)] this means that in year 0 the average rate of the movies is 0 or there were no movies, in year 1 the average rate of the movies is 9 and so on. The problem with this function is that it doesnt load in repl.it
let averageRatePerYear = (movies) => {
  moviesPerYear = separateMoviesByYears(movies)
  let newArray=[]
  for (i=0; i<moviesPerYear.length; i++){
    if(moviesPerYear[i].length !== 0){
    newArray.push(ratesAverage(moviesPerYear[i]))
    } else {newArray.push(0)}
  }
  console.log(newArray)
}


//  This is a simple function that selects the highest number of an array and then returns a sentence using that highest rate and the year (which is the position of the element in the array). Repl.it crushes with this last function. 

let bestYearAvg2 = (array) => {
  newArray = averageRatePerYear(movies)
  year = 0;
  rate = 0;
  for (i=0; i=array.length; i++){
    if(array[i] > rate){
      rate = array[i]
      year = i
    }
  }
  return `The best year was ${year} with an average rate of ${rate}`
}


/* Imprimir las peliculas con duración de más de 110 min

longMovies = movies.filter(function(object, index)){
    return  object.duration > 110;
})

longMovies = movies.filter( object => movie.duration > 110);

Añade una nueva propiedad con map:

const newMovies = movies.map(function(object, index){
    movie.isNew = true;
    return = movie; 
})

const newMovies = movies.map ( object => {
    movie.year > 2000 ? movie.isNew = True : null;
    retunr movie;
})

Map no modifica la array original, pero en este caso si que modificará los objetos de la array, con lo que  en este caso si que modificara movies. MIrarme mutabilidad de map con arrays, arrays anidadas y objetos dentro de movies

const sortedMovies = movies sort (function (movie1, movie2){
    return movie1.rate < movie2.rate
})

Calcular la nota media:

const averageRate = movies.reduce(function(acc, current){
    return acc + current.rate; 
},0) 

const average = arr => {
    return movies.reduce((acc, current) => return acc + current.rate)
} //adaptación hecha por mi ,no fiable.  */