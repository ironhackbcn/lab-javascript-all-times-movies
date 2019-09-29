// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = (array) => {

}


// Get the average of all rates with 2 decimals 

function ratesAverage (array){
  let sum = array.reduce((accumulator, currentValue) => {
   return accumulator + currentValue.rate;
 },0); 

  let average = Number((sum/array.length).toFixed(2));

  return average;
};

// Get the average of Drama Movies

const dramaMoviesRate = array => {
  let moviesDrama = array.filter(function(array, index){
    return array.genre.includes("Drama");
  });
  console.log(moviesDrama);//imprime la array filtrada que solo contiene peliculas que incluyan Drama
  if(moviesDrama.length === 0){return undefined}
  return ratesAverage(moviesDrama);
};
console.log (dramaMoviesRate(movies))//imprime 8.52 que es la media de rate de peliculas drama.




// Order by time duration, in growing order
/*const orderByDuration = array =>{
  let durations = array.map(movie => movie.duration);
  
  let order = durations.sort(a, b){
    if (a === b){
      return orderAlphabetically(order);
    }
  }
}*/




// How many movies did STEVEN SPIELBERG
const onlyDrama = array =>{
  let dramas = array.filter(function(movie){
    return movie.genre.includes("Drama")
  })
  return dramas;
}
//console.log(onlyDrama(movies))

function howManyMovies(array) {
  if(array.length > 0){
    let dramas = onlyDrama(array).filter(function(movie){
      return movie.director === "Steven Spielberg";
    });
    return `Steven Spielberg directed ${dramas.length} drama movies!`;
  } else {
    return undefined
  }
}


// Order by title and print the first 20 titles
function orderAlphabetically (array){
  let titles = array.map(movie => movie.title);

  let order = titles.sort();

  if (order.length > 20){
    return order.splice(0,20)
  } else {
    return order;
  }
}



// Best yearly rate average
