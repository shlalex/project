const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",""); //+ перед promt сделал из string в number

const personalMovieDB = {
    count:numberOfFilms, //занесли переменную через в переменную через двоеточие ":"
    movies: {}, //занесли в переменную пустой обьект "{}"
    actors: {},
    genres: [], //поместили пустой массив []
    privat:false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
b = prompt("На сколько оцените его?", ""),
c = prompt("Один из последних просмотренных фильмов?", ""),
d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);