
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


//ratesAverage(movies);
function ratesAverage(array){
    const sumOfRates = array.reduce(function( accumulator, currentElement, index) {
        let sum = accumulator + currentElement.rate;
        return sum;
        }, 0);
    let average = (sumOfRates / array.length);
    console.log(typeof average);
    
    return parseFloat(average.toFixed(2));
    }

// console.log(typeof ratesAverage(movies))

// Get the average of Drama Movies

function dramaMoviesRate (array){
    const dramaMovies = array.filter(function(element) {
        return element.genre.includes('Drama');
        })
        if (dramaMovies.length !== 0){
        return ratesAverage(dramaMovies);
        }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies (array){
    console.log(array.length)
    if (array.length!==0) {
        const spielberg = array.filter(function(element) {
            return element.director == 'Steven Spielberg';
        })
        console.log(spielberg.length)
        if (spielberg.length != 0) {
    
            const dramaMoviesSpielberg = spielberg.filter(function(element) {
                return element.genre.includes('Drama');
            })
            return `Steven Spielberg directed ${dramaMoviesSpielberg.length} drama movies!`;
        } else {
            return `Steven Spielberg directed 0 drama movies!`;
        }
    }
    
}
       console.log(howManyMovies(movies));





// Order by title and print the first 20 titles


// Best yearly rate average
