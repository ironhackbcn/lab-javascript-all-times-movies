/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
let ratesAverage = array => {
    let arrAverage = array.reduce(function(total, movie){
        return total + movie.rate;
    },0)
    return parseFloat(arrAverage/array.length).toFixed(2)*1;
}
console.log(ratesAverage(movies))
// Get the average of Drama Movies
// A Jasmin no le gusta como esta, no pasa los dos últimos puntos del test aunque si que los cumple

let dramaMovies = array => {
    let drama = array.filter(function(movie, index){
      return movie.genre.includes("Drama")       
  })
    return drama;
  } ;

let dramaMoviesRate = array => { 
  
    if(array.length === 0){
      return undefined;
    }
    return ratesAverage(dramaMovies(array));   
  }
  console.log(dramaMoviesRate(movies))


// Order by time duration, in growing order
//NO ACABADO NI DE COÑA
/*let orderByDuration = array => {
    let descendingTimeOrdered = array.sort(function(a, movie){
        return total + movie.rate;
    },0)
}*/

// How many movies did STEVEN SPIELBERG

//Como no hemos hecho la funcion 4 con maps o filters ahora tenemos que repetir el tema del 4

const directorFilms = (array, name) => {
    let aux = array.filter(function(dir){
          return dir.director === name;
    })
    return aux
  }
  
// console.log(directorFilms(movies, 'Steven Spielberg'))

const howManyMovies = array => {

    if(array.length === 0){
      return undefined;
    } 
            
    return array.length.toString();
  }
  
  console.log(howManyMovies(directorFilms(movies, 'Steven Spielberg')))

// Order by title and print the first 20 titles


// Best yearly rate average
