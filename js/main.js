// 'use strict';
// let numberOfFilms;
// function start(){
//     numberOfFilms = +prompt('Axirinci ay erzinde nece film izlemisiniz?');
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Axirinci ay erzibde nece film izlmemisiniz?');
//     } 
// }
// start(); 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     private: false,
// };
// function rememberMyFilms(){
//     for (let i = 0; i < personalMovieDB.count; i++) {
//         const a = prompt('Zehmet olmasa filmin adini daxil edin'),
//               b = prompt('(0-10) araliginda filmi nece qimetlendirersiniz?');   
//         if(a != '' && b != '' && a != null && b != null && a.length < 25) {
//             personalMovieDB.movies[a] = b; 
//             console.log('done');
//         }
//         else{
//             console.log('error');
//             i--; 
//         }
//     }
// }
// function showVisibility(){
//     if (personalMovieDB.private==true) {
//         personalMovieDB.private==false
//     } else {
//         personalMovieDB.private= true
//     }
// }
// function showMyDB(){
//     if(personalMovieDB.private == true){
//         console.log("Bu hesab shexsidir")
//     }
//     else{
//         console.log(personalMovieDB.movies);
//     }
// } 

// rememberMyFilms(); 
// showMyDB();
// showVisibility();