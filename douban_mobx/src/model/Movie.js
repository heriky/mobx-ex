import {observable, computed} from 'mobx' ;

class Movie {
	id = ""
	face = "" ;
	title = "";
	tags = [] ;
	director = "" ;



	constructor(rawData){
		this.id = rawData.id;
		this.title = rawData.title ;
		this.director = rawData.directors[0]? rawData.directors[0].name : '未知导演';
		this.face = rawData.images? rawData.images.small : '';
		this.tags = rawData.genres;
	}

}

export default Movie ;

