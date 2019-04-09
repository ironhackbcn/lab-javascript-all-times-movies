/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const convertTime = movies.map( newTime => {
    const newHour= newTime.duration[0]*60;
    const newMinute = newTime.duration[3]+ newTime.duration[4];
    
    return { `${newHour+newMinute}` + 'min' };
  })

  console.log(converTime);
  //tring to get only numbers from duration, but fail..
  
// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let sum = array.reduce((accum, element) => accum + element.rate, 0);
    return parseFloat((sum / array.length).toFixed(2));
  };
  
  console.log(ratesAverage(movies));

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
