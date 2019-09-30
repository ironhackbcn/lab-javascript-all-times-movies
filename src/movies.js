/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 






// Get the average of all rates with 2 decimals 

function ratesAverage(array){ 
  let totalAverage = array.reduce(function(accumulador, pelis){
    return accumulador + pelis.rate; 
  },0)
  return parseFloat((totalAverage / array.length).toFixed(2)); 
}


// Get the average of Drama Movies

const  moviesDrama = movies.filter(function (peli) {
    return peli.indexOf("Drama") !== -1;
  }
)
function dramaMoviesRate (array){
  return ratesAverage(moviesDrama)
}
   
    
    



// Order by time duration, in growing order




// How many movies did STEVEN SPIELBERG

let moviesSteven = moviesDrama.filter(function(peli){
    if (moviesSteven === 0){
      return "undefined;"
    }else{
     return peli.indexOf("Steven Spielberg") !== -1;
    }
    })
  



function howManyMovies (array){
  if (array.length >= 0){
    return `Steven Spielberg directed ${array.length} drama movies!`;
  } 
}






// Order by title and print the first 20 titles

  let orderList = movies.sort(function(a, b){
    return a.title > b.title;
  })


  function  orderAlphabetically(array){
      let first = array.slice(0, 20);
      return first;
}






// Best yearly rate 



