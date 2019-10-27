/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesList) {    
    let moviesInMinutes = [];
    moviesList.forEach(function (movie) {
        let textDuration= movie.duration.split(' ');
        let hours = 0;
        let minutes = 0;
        textDuration.forEach(element => {
            if (element.includes('h')) {
                hours = parseFloat(element.split('h').join(''));
            }else if(element.includes('min')) {
                minutes = parseFloat(element.split('min').join(''));
            }
        });
        let movieInMinutes = {
            title: movie.title,
            year: movie.year,
            director: movie.duration,
            duration: (hours *60 + minutes),
            genre: movie.genre,
            rate: movie.rate
        };
        moviesInMinutes.push(movieInMinutes);
    });
    return moviesInMinutes;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(moviesList) {
    let moviesCounter = 0;
    let sumMoviesRate = moviesList.reduce(function(accumulator,element,index) {        
        if ('rate' in element) {
            moviesCounter++;
            return accumulator + element.rate;
        }else {
            return 0;
        }
    },0);
    return parseFloat((sumMoviesRate / moviesCounter).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesList) {
    let dramaAverage = ratesAverage(moviesList.filter(function (movie) {
        return (movie.genre.includes('Drama'));
    }));
    if (dramaAverage > 0) {
        return dramaAverage;
    }else {
        return undefined;
    }
}

// Order by time duration, in growing order
function orderByDuration(moviesList) {
    return moviesList.sort(function(movie1,movie2) {
        if (movie1.duration < movie2.duration) {
            return -1;
        }else if(movie1.duration > movie2.duration) {
            return 1;
        }else {
            let alphabeticalOrder = [movie1,movie2].sort();
            if(alphabeticalOrder[0] === movie1) {
                return 1;
            }else {
                return -1;
            }
        }
    });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesList) {
    let moviesDramaSpielberg = moviesList.filter(function (element) {
        return ((element.genre.includes('Drama')) && (element.director === 'Steven Spielberg'));
    });
    if ((moviesDramaSpielberg.length >= 0) && moviesList.length >0) {
        return 'Steven Spielberg directed ' + moviesDramaSpielberg.length + ' drama movies!';
    }else {
        return undefined;
    }
}


// Order by title and print the first 20 titles
function orderAlphabetically(moviesList) {
    let moviesTitles = moviesList.map(movie => movie.title);
    moviesTitles.sort();
    if (moviesTitles.length > 20) {
        moviesTitles.splice(20, moviesList.length - 20);
    }
    return moviesTitles;
}

// Best yearly rate average
function bestYearAvg(moviesList) {
    if(moviesList.length <= 0) {
        return undefined;
    }
    let ratePerYear = {};
    moviesList.forEach(function (movie) {        
        if ('rate' in movie) {
            if (movie.year in ratePerYear) {                
                ratePerYear[movie.year].average *= ratePerYear[movie.year].numberOfMovies;
                ratePerYear[movie.year].numberOfMovies++;
                ratePerYear[movie.year].average =  (ratePerYear[movie.year].average + movie.rate)/ratePerYear[movie.year].numberOfMovies;                
            }else {
                ratePerYear[movie.year] = {                    
                    numberOfMovies : 1,
                    average : movie.rate
                };
            }
        }        
    });
    let bestYear = 0;
    let bestAverage = 0;    
    for(let year in ratePerYear) {                    
        if (parseFloat(ratePerYear[year].average)>bestAverage) {                
            bestYear = parseInt(year);
            bestAverage = parseFloat(ratePerYear[year].average);
        }else if(ratePerYear[year].average === bestAverage) {
            if (parseInt(year) < (bestYear)) {
                bestYear = parseInt(year);
                bestAverage = parseFloat(ratePerYear[year].average);                
            }
        }                    
    }
    return 'The best year was ' + bestYear + ' with an average rate of ' + bestAverage;
}