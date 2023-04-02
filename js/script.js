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

const a = prompt('Назовите один из последних просмотренных фильмов', 'Телохранитель жены киллера'),
			b = +prompt('Насколько вы его оцените', '8.1'),
			c = prompt('Назовите один из последних просмотренных фильмов', 'Телохранитель жены киллера 2'),
			d = +prompt('Насколько вы его оцените', '8.3');

console.log(personalMovieDB.movies);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;