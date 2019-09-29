/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 
let arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b.rate
    }, 0);)
  }
  console.log (arrSum(movies).toFixed(2));



// Get the average of Drama Movies 
//Nota para AlEX: FILTER las pelis de Drama y después hacer el average

function dramaMovies (movies) {
let drama = movies.filter(function(movie){
  return (movie.genre ===`Drama`);
});
console.log (drama);
}
//En replit me sale un array vacio y undefined...así que lo del average lo hago basándome en el ejercicio anterior

let arrSum = function(movies){
  return movies.reduce(function(a,movies){
    return a + movies.genre
  }, 0);)
}
console.log (arrSum(movies).toFixed(2));


// Order by time duration, in growing order
//Nota para Alex: utilizar SORT





// How many movies did STEVEN SPIELBERG
//Nota para Alex: utilizar FILTER

function spielbergMovies (movies) {
  let spielberg = movies.filter(function(movie){
    return (movie.director ===`Steven Spielberg`);
  });
  console.log (spielberg);
  }
//En replit me sale tb undefined...


// Order by title and print the first 20 titles
//Nota para Alex: ¿SORT y crear un nuevo array mediante push con los 20 primeros mediante loop? 

function orderTitle (movies){
  let newMovies = movies.sort(function (a, b) {
      if(a < b){
        return -1
      } if(a > b){
        return 1
      } else {
        return 0
      }
      })

  let titleTwenty =[];
  for (i=0; i<19; i++){
    titleTwenty.push(newMovies[i])
  }
  
  console.log(titleTwenty);
}
//sale undefined en replit...




// Best yearly rate average
//Nota para Alex: ¿Se podría crear un array por año y hacer un SORT de cada array o es muy rebuscado?







