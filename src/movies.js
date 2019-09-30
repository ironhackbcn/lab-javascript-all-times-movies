/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    let moviesArray = arr
    for (var i = 0; i < moviesArray.length; i++) {
        if (typeof(moviesArray[i].duration) === "string") {
            let timesArray = moviesArray[i].duration.split(' ');
            let totalTime = 0;
            if (typeof moviesArray[i].duration === 'number') {
                totalTime = moviesArray[i].duration / 60;
            } else if (timesArray.length === 1) {
                totalTime = parseInt(timesArray[0]) * 60 
            } else {
                let hours = parseInt(timesArray[0]);
                let minutes = parseInt(timesArray[1]);
                totalTime = (hours * 60) + minutes;
            }
            moviesArray[i].duration = totalTime;  
        } 
    }
    return moviesArray;

}


// Get the average of all rates with 2 decimals 

/*(array) =>  array[0]

function returnFirstElement(array) {
    return array[0]
}

array.reduce(funcionParaSumar);

const funcionParaSumar = (acumulator, currentValue) => acumulator = currentValue
*/

const ratesAverage = (arr) => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].rate
    }
    return Number((sum / arr.length).toFixed(2));
} //toFixed siempre retorna un string, por eso Number esta antes, para que cuando este te retorne el string el Number lo transforme en "numero"
 
// Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].genre.includes('Drama')) {
            sum += arr[i].rate;
            counter += 1;
        } 
    } 
    if (sum === 0) {
        return undefined;
    }
    return Number((sum / counter).toFixed(2))
}

// Order by time duration, in growing order

const orderByDuration = (arr) => {
    
}

// How many movies did STEVEN SPIELBERG

const howManyMovies = (arr) => {
    if (arr.length === 0) {
        return undefined;
    } 
    let dMovies = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].director === 'Steven Spielberg' && arr[i].genre.includes('Drama')) {
            dMovies += 1;
        }
    }

    return `Steven Spielberg directed ${dMovies} drama movies!`
    
}



// Order by title and print the first 20 titles
const orderAlphabetically = arr => {
    let titles = [];
    for (var i = 0; i < arr.length; i++) {
        titles.push(arr[i].title);
    } 

    titles.sort();
    if (titles.length < 20) {
       return titles
    } 
    else {
        return titles.slice(0,20)
    }

}

// Best yearly rate average


