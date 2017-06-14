import {observer} from 'mobx-react' ;

import React, {Component} from 'react' ;
import store from '../store/MovieStore' ;


@observer
class SearchDetail extends Component{
	constructor(props){
		super(props) ;
	}

	render(){
		var id = this.props.params.id ;
		var movie ;
		store.movies.forEach((item, index)=>{
			if (item.id = id) {
				movie = item ;
				return;
			}
		})

		return <div>
			当前电影名称为: <h3>{movie&&movie.title}</h3>
		</div>
	}
}

export default SearchDetail ;