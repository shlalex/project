let numberOfFilms; //+ перед promt сделал из string в number

function start(){
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
}
}

start();

const personalMovieDB = {
    count:numberOfFilms, //занесли переменную через в переменную через двоеточие ":"
    movies: {}, //занесли в переменную пустой обьект "{}"
    actors: {},
    genres: [], //поместили пустой массив []
    privat:false
};


function rememberMyFilms(){
    for (let i=0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
    
        if (a !=null && b !=null && a !="" & b !="" && a.length<50){
            personalMovieDB.movies[a]=b;
            console.log("done");
    
        }else{
            console.log("error");
            i--;
        }
        personalMovieDB.movies[a] = b;
    }

}

rememberMyFilms();

function detectedPersonslLevel(){
    if (personalMovieDB.count<10){
        console.log ("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }

}

detectedPersonslLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYouGeners(){
    for (let i=1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYouGeners();