/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*function turnHoursToMinutes(array){
    let minutes:0;
    let hours:0;

    let filtrarHores= array.map(function(movie){
        if(movie.duration.includes("h"){
            return *(60);
        })
        

    })
}

const newMovies= movies.map(function(movie,index){
    if(movie.year>2000){
        movie.isNew=true (afegim la key is new amb el punt)
    }
return movie; (si nomes retornem newmovies ens tornaria nomes istrue istreu is true)
})*/
// Get the average of all rates with 2 decimals 

function ratesAverage(array){
    let sumaMovies= array.reduce(function(accumulator,currentValue){
        return accumulator+currentValue.rate
    },0)
    return parseFloat(sumaMovies/array.length).toFixed(2)*1;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
    let dramaOnly = array.filter(function(movie){

        if(movie.genre.includes("Drama")){        
            return movie.rate;}   
        else{
            return undefined;
        }
        
    })
    return ratesAverage(dramaOnly);

}
console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG

function dramaOnly (array) {
    let dramas = array.filter(function(movie){
     if(movie.genre.includes("Drama")){        
        return movie.title}
    })
    return dramas;
}
console.log(dramaOnly(movies));

//printea todo el objeto aunque le pido que sólo el título
 /*if(dramaOnly(array)=== true &&& movie.director ==="Steven Spielberg"){
    return movie;*/

function howManyMovies(array){
    if(array.length > 0){
        let dramaSteven= dramaOnly(array).filter(function(movie){
            return movie.director === "Steven Spielberg"
            
        });
        return `Steven Spielberg directed ${dramaSteven.length} drama movies!!!`;


    }
    else  {
        return undefined
    }
    
  
  }    
  
  console.log(howManyMovies(movies));



// Order by title and print the first 20 titles
/*intención: crear un nuevo array vacio, 
recorrer el array y que push todos los titulos del array al nuevoarray.
si la longitud del nuevo array es menor q 20 me crea una copia de las primeras 20
sino retorna novaArray.
ahora vamos a comparar alfabeticamente el nuevo array*/

function orderAlphabetically(array){ 
    let novaArray=[];
    for(let i=0; i<array.length; i++){
        return novaArray.push(array[i].title); // en aquest loop hi ha algu q no funciona
        if(novaArray.length<=20){
            return novaArray.slice(0, 20);

        }
    }

    let sortedMovies=novaArray.sort(function(movie1,movie2){
        return movie1.title < movie2.title;})
    
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

