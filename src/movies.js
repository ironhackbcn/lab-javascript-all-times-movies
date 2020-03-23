//Iteration 1: Order by year

// Review - > the second order doesn't work.
function orderByYear(){

const c = movies.sort((a,b) => {
  if (a.year < b.year){
    return -1;
}
  if (a.year > b.year){
    return 1;
} 
  if (a.year === b.year){
    movies.sort((a,b) => {
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

/*Solution 1: To be refactorized in future (Bcaklog). 
This solution transforms the string with hours and minutes to minutes (integer)
Problem 1 -> When the film doesn't have a minuts array because the duration contains only hours 
Problem 2 -> The function returns only the string duration changed to integer but not the whole object.
*/

const turnHoursToMinutes = array => {

  let totalMinutes = movies.map(movie => {

    //I divide the duration string in 2 string with hours and minutes.
    let hoursAndMinutes = movie.duration.split(" ");
    //console.log(hoursAndMinutes);

    //I assign to onlyMinutes the hours and I delete the "h"
    let onlyMinutes = hoursAndMinutes[0].replace("h","");
    //console.log(onlyMinutes);

    /*Add minutes when the film has not array in minutes for example the film 'Il buono, 
    il brutto, il cattivo' It doesn't work (yet).
    */
    if (hoursAndMinutes[1] == 0){
       hoursAndMinutes[1] = ["00min"]
    }
    //I assign to minutesWithoutMin the minutes and I delete the "min"
   let minutesWithoutMin = hoursAndMinutes[1].replace("min","");

    //console.log(minutesWithoutMin);

    //I multiply the hours for 60 minutes.
    let hoursToMinutes = parseInt(onlyMinutes*60);
    //console.log(hoursToMinutes);
    
    //I add the hours transformed in minutes to the minutes

   let durationInMinutes = hoursToMinutes + parseInt(minutesWithoutMin);
    // console.log(durationInMinutes);

   return durationInMinutes;
   }
  );  return totalMinutes;
}

console.log(turnHoursToMinutes(movies)); 


//A solution that works

function turnHoursToMinutes2(array) {
  var newArray = array.map(function(movie) {
      var movieCopy =Object.assign({},movie);
      return movieCopy;
  }); 

  newArray.forEach(function(element) {
      var hours;
      var minutes;
      var currentDuration = element.duration;
      if(currentDuration.indexOf("h") === -1) {
          hours = 0;
      } else {
          hours = parseInt(currentDuration.slice(0,1));
      }
      if(currentDuration.indexOf("min") === -1) {
          minutes = 0;
      } else {
          minutes = parseInt(currentDuration.slice(currentDuration.indexOf("h") + 1, currentDuration.indexOf("min")));
      }
      element.duration = parseInt((hours * 60) + minutes);
  })
  return newArray;

}

console.log(turnHoursToMinutes(movies)) 

//BONUS: Best yearly rate average

function bestYearAvg(array) {
  var bestYears = [];
  var yearsSorted = orderByYear(array);
  for(let i = 1900; i <= 2020; i++) {
      bestYears.push()
  }
  if(bestYears.length === 0) {
      return null; 
  }
  if(bestYears.length === 1) {
      return("The best year was " + bestYears[0].year  + " with an average rate of " + bestYears[0].rate)
  }
}

console.log(bestYearAvg(movies));
