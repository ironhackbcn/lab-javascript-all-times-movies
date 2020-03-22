//Iteration 1: Order by year

// Review - > the second order doesn't work.
function orderByYear(){

const c = movies2.sort((a,b) => {
  if (a.year < b.year){
    return -1;
}
  if (a.year > b.year){
    return 1;
} 
  if (a.year === b.year){
    movies2.sort((a,b) => {
      if (a.title < b.title){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      }
      return 0;
    })
  } return 0;
}); return c;
}

//console.log(orderByYear());

/* Solo ordenados por año:
function orderByYear(arr){
var moviesSortByReleaseDate = movies.sort((a,b) => {
    if (a.year < b.year){
      return -1;
  }

  if (a.year > b.year){
      return 1;
  }
  return 0;
}); 
}*/

//Iteration 2: Steven Spielberg. The best?

function howManyMovies(arr){
    const spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg")

  return spielbergMovies;

}
//console.log(howManyMovies());

// Iteration 3: Alphabetic order

const orderAlphabetically = (array) =>{
 
  let titlesArray =  movies.map((movie => movie.title));
  
  let MoviesSorted = titlesArray.sort();
  
  let twentyFilmTitles = MoviesSorted.splice(0,20);
  
  return twentyFilmTitles;

}
//console.log(orderAlphabetically())

//Iteration 4: All rates average

const ratesAverage = array => {

  let avRate = movies.reduce((sum, movie) => {return sum + (movie.rate)/movies.length},0);
  
  let avRate2dec = avRate.toFixed(2)
  console.log(avRate2dec); 

  return avRate2dec;

}
console.log(ratesAverage());

//Iteration 5: Drama movies

const dramaMoviesRate = array =>{

let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

console.log(dramaMovies);

let avRate = dramaMovies.reduce((sum, movie) => {return sum + (movie.rate)/dramaMovies.length},0);
  
let avRate2dec = avRate.toFixed(2)
console.log(avRate2dec); 

return avRate2dec;
}

console.log(dramaMoviesRate());

//Iteration 6: Time format

const turnHoursToMinutes = array => {

  let totalMinutes = movies.map(movie => {

    //dividimos la duración en un string de 2 con horas y minutos
    let hoursAndMinutes = movie.duration.split(" ");
    //console.log(hoursAndMinutes);

    //A onlyMinutes le asignamos las horas y quitamos la h
    let onlyMinutes = hoursAndMinutes[0].replace("h","");
    //console.log(onlyMinutes);

    //Quitamos el min de la parte de minutos
    let minutesWithoutMin = hoursAndMinutes[1].replace("min","");
    //console.log(minutesWithoutMin);

    //Multiplicamos las horas por 60
    let hoursToMinutes = parseInt(onlyMinutes*60);
    //console.log(hoursToMinutes);
    
    //Sumamos horas convertidas en minutos + minutos

    let durationInMinutes = hoursToMinutes + parseInt(minutesWithoutMin);
    console.log(durationInMinutes);

    return durationInMinutes;
   }
  );  return totalMinutes;
}

console.log(turnHoursToMinutes());
