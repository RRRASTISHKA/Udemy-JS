/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";
let numberOfFilms;

function start(){
    numberOfFilms =+prompt("Сколько фильмов вы уже посмотрели?").trim();

    while(numberOfFilms==="" || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms =+prompt("Сколько фильмов вы уже посмотрели?").trim();
    }

}

function rememberMyFilms(){
    let times=2;
for(let i=0;i<times;i++){
    const a=prompt("Один из последних просмотренных фильмов").trim();
    const  b=prompt("На сколько оцените его").trim();

    if(a!=null && b!=null && a!=""&& b!="" && a.length<50){
        personalMovieDB.movies[a]=b; 
    }else{
        i--;
        console.log("error");
    }

}
    
}

function detectPersonalLevel(){
    if(numberOfFilms<10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(numberOfFilms>10 && numberOfFilms<30){
        console.log("Вы классический зритель");
    } else if(numberOfFilms>30){
        console.log("Вы киноман");
    }else if(numberOfFilms!="number"){
        console.log("Произошла ошибка");
    }

}
function writeYourGenres(){
    let times=3;
    for(let i=1;i<=times;i++){

        const a=prompt(`Ваш любимый жанр под номером ${i}`).trim();
        if(a!=null && a!=""){
            personalMovieDB.genres[i-1]=a; 
        }else{
            i--;
            console.log("error");
        }
    }

}

const personalMovieDB={
    count:numberOfFilms,
	movies:{},
    actors:{},
    genres:[],
    privat:false

}; 

writeYourGenres();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.privat);

