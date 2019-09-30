/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const hoursToMinutes = array => array[0]*60 + array[1]*1;
      
const turnHoursToMinutes = (array) => {
  
    let moviesCopie =JSON.parse(JSON.stringify(array))
  
    let moviesNumbers = moviesCopie.map(function(movie){

        if(!movie.duration.includes("h")){
            movie.duration = "0h " + movie.duration
        } else if(!movie.duration.includes("min")){
            movie.duration = movie.duration + " 00min"
        } 

        movie.duration = hoursToMinutes(movie.duration.match(/\d+/g))
        return movie
    })
  
    return moviesNumbers
  }
  
 // console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 
const ratesAverage = array => {

    let arrAverage = array.reduce((total, movie)=> total + movie.rate,0);

    return parseFloat(arrAverage/array.length).toFixed(2)*1;
}
console.log(ratesAverage(movies))
// Get the average of Drama Movies
// JAsmine dice que no devuelve undefine si no hay ninguna Drama movie, pero si que lo hace, y ya no tengo más idea que probar para que le guste.


const dramaMovies = array => {
  let drama = array.filter(movie=> movie.genre.includes("Drama"))

  return drama
}
const dramaMoviesRate = array => array.length > 0 ? ratesAverage(dramaMovies(array)) : undefined;

 // console.log(dramaMoviesRate(movies))


// Order by time duration, in growing order
const orderByDuration = array => {

  let alphabetical = array.sort(function(a,b){
    if(a.title > b.title){
      return 1
    } else if(a.title < b.title){
      return -1
    } else {return 0}
    
  })   

  let aux = (turnHoursToMinutes(alphabetical)).sort(function(a,b){
   return a.duration - b.duration
  })

  let aux2 = aux.map(movie => movie.title);

  return aux2;
}
  
  console.log(orderByDuration(movies))

// How many movies did STEVEN SPIELBERG
//a Jasmine no le gusta, pero hace lo que ella pide. Porque? Como puedo identificar dentro de Jasmine como quiere que lo haga?

const directorFilms = (array, name) => {
    let aux = array.filter(dir => dir.director === name);
  
    return aux
  }
  
// console.log(directorFilms(movies, 'Steven Spielberg'))

const howManyMovies = (array, directorName) => {

    if(array.length === 0){
      return undefined;
    } 
    return `${directorName} directed ${dramaMovies(directorFilms(array, directorName)).length} drama movies!`          
  }
  
//console.log(howManyMovies(directorFilms(movies, 'Steven Spielberg')))

// Order by title and print the first 20 titles

const orderAlphabetically = (array) => {

    let arrayCopie =JSON.parse(JSON.stringify(array));
    
    let justTitle = arrayCopie.map(movie => movie.title);
    
    let sortedArray = justTitle.sort()
    
    return sortedArray.slice(0,20)
}
//console.log(orderAlphabetically(movies))
// Best yearly rate average
