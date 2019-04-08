/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    const newArray = array.map((element) => {
        //really ugly method
        element.duration = (element.duration.split('h')[0] * 60) + (element.duration.split('h')[1].split('min')[0]*1)
        return element
    })
    return newArray
}
//console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 
function ratesAverage (array) {
    return array.reduce((sum, currentValue) => parseFloat(((sum + currentValue.rate) / array.length).toFixed(2)), 0)
}

// Get the average of Drama Movies
function dramaMoviesRate (array) {
    const newArray = array.filter((element) => {
        if (element.genre.includes('Drama')) {
            return element
        }
    })
    return newArray
    //console.log(ratesAverage(newArray))
}

// Order by time duration, in growing order
function orderByDuration (array) {
    const newArray = turnHoursToMinutes(array)
    newArray.sort((a, b) => {
        return a.duration - b.duration
    })
    return newArray
    //console.log(newArray)
}
//orderByDuration(movies)

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    let counter = 0
    if (array.length === 0) {
        return undefined
    } else {
        array.filter((element) => {
            if (element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
                counter++
            }
        })
        return counter
    }
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const newArray = array.slice(0, 20).map(element => {
        return element.title
    });
    return newArray.sort()
}

//console.log(orderAlphabetically(movies))
// Best yearly rate average
function bestYearAverage(array) {
    const years = {}
    array.forEach(element => {
        if (!years[element.year]) {
            years[element.year] = []
            years[element.year].push(element)
        } else {
            years[element.year].push(element)
        }
    });
    const bestYear = {
        year: '',
        rate: ''
    }
    for (year in years) {
        yearRate = ratesAverage(years[year])
        if (yearRate > bestYear['rate']) {
            bestYear['year'] = year
            bestYear['rate'] = yearRate
        }
    }
    console.log(`The year with the highest average rating is ${bestYear['year']} with an average rating of ${bestYear['rate']}`)
}

bestYearAverage(movies)