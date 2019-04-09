/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 
function ratesAverage (movieArr) {
  const ratesTotal = movieArr.reduce(function(total,currenRate){
    return total + currenRate.rate;
  },0);
  return parseFloat((ratesTotal/movieArr.length).toFixed(2));
}
console.log(ratesAverage(movies))

// Get the average of Drama Movies
function dramaMoviesRate (movieArr){
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
}
console.log(dramaMoviesRate(movies))
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArr){
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
    
}
console.log(howManyMovies(movies))
// Order by title and print the first 20 titles
function orderAlphabetically(movieArr){
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
}}
console.log(orderAlphabetically(movies))
// Best yearly rate average