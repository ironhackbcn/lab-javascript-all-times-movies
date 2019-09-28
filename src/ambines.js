/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
let ratesAverage = array => {
    let arrAverage = array.reduce(function(total, movie){
        return total + movie.rate;
    },0)
    return parseFloat(arrAverage/array.length).toFixed(2)*1;
}
console.log(ratesAverage(movies))
// Get the average of Drama Movies

let dramaMoviesRate = array => {
    
    let dramaRate = []

    for(let i=0; i<array.length; i++){
        for (let j = 0; j<array.length; j++)
            if(array[i].genre[j] === "Drama"){ 
                dramaRate.push(array[i].rate);      
            }         
        }
    
    if(dramaRate.length === 0){
        return undefined;
    }

   let averageDrama =  dramaRate.reduce(function (total, currentValue){
        return total + currentValue },0)
    
    return parseFloat(averageDrama/dramaRate.length).toFixed(2)*1
    
}
console.log(dramaMoviesRate(movies))
// Order by time duration, in growing order
//NO ACABADO NI DE COÑA
let orderByDuration = array => {
    let descendingTimeOrdered = array.sort(function(a, movie){
        return total + movie.rate;
    },0)
}

// How many movies did STEVEN SPIELBERG

//Como no hemos hecho la funcion 4 con maps o filters ahora tenemos que repetir el tema del 4

let howManyMovies = array =>{
    
    let stevenFilms = array.filter(function(dir){
        return dir.director === "Steven Spielberg"
    })

    if(stevenFilms.length === 0){
        return undefined;
    } 

    let stevenDrama = [];

    for(let i = 0; i< stevenFilms.length ; i++){
        for(let j = 0 ; j < stevenFilms.length; j++){
            if(stevenFilms[i].genre[j] != "Drama"){
                stevenDrama.push(array[i])
            }
        }
    }

    if(stevenDrama.length === 0){
        return `Steven Spielberg directed 0 drama movies!`
    } else {
        return `Steven Spielberg directed ${stevenDrama.length}`
    }
    
    return stevenFilms.length.toString();
}
console.log(howManyMovies(movies))
// Order by title and print the first 20 titles


// Best yearly rate average


/*

imprimir las películas con duración mayor a 110 min con filter

movies.filter(function(elemento,indice)
elemento cada una de las peliculas en este caso es movie, q es cada una de las peliculas
indice cada key del objeto

movies.filter(function(movie,indice){
    return movie.duration>110;
})
console.log(movies) va a imprimir la original por eso debe crearse una nueva variable


let longerMovies=movies.filter(function(movie,indice){
    return movie.duration>110;
})
console.log(longerMovies) 


=========>   añadir una propiedad "isNew:true" a cada pelicula con (MAP)

const newMovies= movies.map(function(movie,index){
    if(movie.year>2000){
        movie.isNew=true (afegim la key is new amb el punt)
    }
return movie; (si nomes retornem newmovies ens tornaria nomes istrue istreu is true)
})

console.log(movies);

=========>  ordenar las peliculas segun su puntuacion sort

a i b son cada pelicula podiem dirli unaMovie unaAltreMovie
const sortedMovies= movies.sort(function(a,b){
    return a.rate < b.rate
})

saber la puntuacion media de las peliculas reduce

function average(arr){
    let total= arr.reduce(function(acc,current)){

        return acc+current.rate;
    },0)
    return total/arr.lenght.toFixed(2);

}



*/

