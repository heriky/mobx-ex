import {observable, computed} from 'mobx' ;

class Movie {
	title = "";
	label = " " ;
	director = "" ;

	face = "" ;

	constructor(title, label, director, face){
		this.title = title ;
		this.label = label ;
		this.director = director ;
		this.face = face;
	}

}

export default Movie ;

