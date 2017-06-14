import {observable, computed, action} from 'mobx' ;

import Movie from '../model/Movie' ;

var $ = require('jquery');

class MovieListStore {

	@observable movies = [] ;
	@observable isLoading = false;

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
	// http://api.douban.com/v2/movie/search?q=${encodeURIComponent(keyword)}

	fetchMovies(keyword){
		var __self = this ;
		var url = `http://api.douban.com/v2/movie/search?q=${encodeURIComponent(keyword)}`
		$.ajax({
			url: url ,
			type: 'get',
			dataType: 'jsonp',
			corssDomain: true,
			jsonp: 'callback' ,
			cache: true,
			beforeSend:function(){
				__self.isLoading = true;
			},
			success: function(data){
				__self.isLoading = false ;
				__self.movies.push(...(data.subjects.map((subject, index)=>{
					return new Movie(subject);
				})))
			}
		})
	}
}


const store = new MovieListStore() ;

export default store;