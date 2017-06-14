import {observable, computed} from 'mobx' ;

import Movie from '../model/Movie' ;

class MovieListStore {
	@observable movies = [] ;

	constructor(){
		this.backup = this.movies.slice() ;
	}

	addMovie(title, label, director, face){ // 构造号
		var newMovie = new Movie(title, label, director, face)
		this.movies.push(newMovie) ;
		this.backup.push(newMovie) ;
	}

	filterMovie(title){
		this.backup.filter((movie, index)=>{
			return movie.title == title ;
		})
	}
}