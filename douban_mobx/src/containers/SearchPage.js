import {observer} from 'mobx-react' ;

import React, {Component} from 'react' ;

import store from '../store/MovieStore' ;

import MovieItem from '../components/MovieItem' ;
import List from '../components/List' ;
import Progressbar from '../components/Progressbar' ;
import SearchInput from '../components/SearchInput' ;


@observer
class SearchList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div>
			{store.isLoading ? <Progressbar />:
				<List movies={store.movies.slice()}>
					{store.movies.map((movie, index)=>{
						return <MovieItem movie = {movie} key={index}></MovieItem>
					})}
				</List>}
		</div>
	}
}

export default SearchList ;