'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '10');

console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);

// const a = prompt('Назовите один из последних просмотренных фильмов', 'Телохранитель жены киллера'),
// 			b = +prompt('Насколько вы его оцените', '8.1'),
// 			c = prompt('Назовите один из последних просмотренных фильмов', 'Телохранитель жены киллера 2'),
// 			d = +prompt('Насколько вы его оцените', '8.3');

// console.log(personalMovieDB.movies);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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

console.log(personalMovieDB);
console.log(personalMovieDB.movies);

if (personalMovieDB.count < 10) {
	console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
		console.log('ERROR');
}