/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 
function ratesAverage (movieArr) {
  /*=====================================================0=my code
  const ratesTotal = movieArr.reduce(function(total,currenRate){
    return total + currenRate.rate;
  },0);
  return parseFloat((ratesTotal/movieArr.length).toFixed(2));
  ===============================================================*/

  let sum = movieArr.reduce(function(acc,movie){
    return acc + movie.rate;
  },0);

  return Number((sum / movieArr.length).toFixed(2)); // Number o parseFloat? toFixed devuelve string?

}
console.log(ratesAverage(movies))

// Get the average of Drama Movies
function dramaMoviesRate (movieArr){
  /*====================================== my code
  const dramaTotal = movieArr.filter(function(elem) {
    return elem.genre.indexOf("Drama") > -1;
  });
  const dramaRatesTotal = dramaTotal.reduce(function(total,currenRate){
    return total + currenRate.rate;
  },0);
  if(dramaRatesTotal === 0){
    return undefined;
  }
  return parseFloat((dramaRatesTotal/dramaTotal.length).toFixed(2));
  =============================================================*/
  let dramaMovies = movieArr.filter(function(movieObj){
    if (movieObj.genre.indexOf("Drama") !== -1){ // cualquier numero que no sea -1
      return movieObj; // truthy value - si cumple la condicion, si da true, almacena el padre
    }
  });
  let dramaAverage = ratesAverage(dramaMovies);
  if(isNaN(dramaAverage)){
    return undefined;
  }
  else{
    return dramaAverage;
  }

}
console.log(dramaMoviesRate(movies))
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArr){
  /*===================================mycode 
  const spielDramaTotal = movieArr.filter(function(elem) {
    return elem.genre.indexOf("Drama") > -1;});

    const spielTotal = spielDramaTotal.filter(function(elem) {
      return elem.director === "Steven Spielberg";
      });
      if(spielTotal.length > 0){
      return `Steven Spielberg directed ${spielTotal.length} drama movies!`;
      }
      else{
      return undefined;
      }
      =================================================*/

      if(movieArr.length === 0){
        return undefined;
      }
      let counter =0;
      movieArr.forEach(function(movieObj){
        if ((movieObj.genre.indexOf("Drama") !== -1) && movieObj.director === "Steven Spielberg"){ // cualquier numero que no sea -1
          return counter++;
        }
      });
        
     /* let stevensMovies = movieArr.filter(function(movieObj){
        if ((movieObj.genre.indexOf("Drama") !== -1) && movieObj.director === "Steven Spielberg"){ // cualquier numero que no sea -1
          return true;
        }
      });*/
      return `Steven Spielberg directed ${counter} drama movies!`;

    
}
console.log(howManyMovies(movies))
// Order by title and print the first 20 titles
function orderAlphabetically(movieArr){
  /*================================my code
  movieArr.sort(function (a,b){
    if (a.title < b.title){
      return -1;
  }
  
});
var newTitles = [];
if(movieArr.lenght<20){
  
  for(let i=0;i<movieArr.lenght;i++){
    newTitles.push(movieArr[i].title);
  }
  return newTitles;
}
else{
for(let i=0;i<20;i++){
  newTitles.push(movieArr[i].title);
}
return newTitles;
}
=====================================================*/
movieArr.sort(function(objA,objB){
  if(objA.title < objB.title){
    return -1;
  }
  else{
    return 1;
  }
});
let top20 =movieArr.splice(0,20);
let result = top20.reduce(function(acc,titleObj){
  acc.push(titleObj.title);
  return acc;
},[]); // inicializarlo en funcion de lo que se busque
return result;

}
console.log(orderAlphabetically(movies))
// Best yearly rate average



