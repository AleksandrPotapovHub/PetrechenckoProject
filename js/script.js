'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '10');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '10');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Назовите один из последних просмотренных фильмов', 'Телохранитель жены киллера'),
					b = +prompt('Насколько вы его оцените', '8.1');
		if (a != null && b != null && a != '' && b !='' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('yes');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

console.log(personalMovieDB);
console.log(personalMovieDB.movies);

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
			console.log('ERROR');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i =1; i <=3; i++) {
		const genre = prompt(`Ваш любимы жанр под номером ${i}`);

		if (genre != null && genre != '') {
			personalMovieDB.genre[i - 1] = genre;
		} else {
			console.log('error');
			i--;
		}
	}
}
writeYourGenres();