/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    let sumaRates= array.reduce(function(acumulador,currentvalue){
      return acumulador+currentvalue.rate;
    },0)
    return parseFloat(sumaRates/array.length).toFixed(2)*1;
    }
  
  console.log(ratesAverage(movies));
// Get the average of Drama Movies

function onlyDramas(array){
    let justDramas=array.filter(function(movie){
        if(movie.genre.includes("Drama")){
            return movie
        }
    })
    return justDramas;
 }
 console.log(onlyDramas(movies));

 function dramaMoviesRate(array){
     if(array.length>0){
        return ratesAverage(onlyDramas(array));
     }
     else{
         return undefined;
     }
 }

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG
function whoDirected(array,name){
    let directedBy= array.filter(function(director){
      return director.director===name;
    })
    return directedBy;
  }
  console.log(whoDirected(movies, "Steven Spielberg"));

  function howManyMovies(array,name){
    if(array.length === 0){
        return undefined
    } 
        return `${name} directed ${onlyDramas(whoDirected(array,name)).length} drama movies!`;
    
}

console.log(howManyMovies(whoDirected(movies, "Steven Spielberg")));

// Order by title and print the first 20 titles

const nomesTitols= movies.map(function(movie){
    return movie.title;})
 
 console.log(nomesTitols);
console.log("===============");

console.log("===============");
const nomesVint= nomesTitols.slice(0,20);
console.log(nomesVint);
console.log("===============");

 function orderAlphabetically(array){ 
    let sortedMovies=nomesVint.sort(function(a,b){
     if (a<b){
       return -1;
     } if (a>b){
       return 1;
     }
      return 0;
    
    })
    return sortedMovies;
   
   }
   console.log(orderAlphabetically(movies));




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

