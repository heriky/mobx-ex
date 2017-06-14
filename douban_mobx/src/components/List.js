import React,{PropTypes, Component} from 'react';

function List(props){
	return (
		<div className="movie-list-root">
			<span className="list-info">共{props.movies.length}条记录,关键字</span>
			<ul className="movie-list">
				{props.children}
			</ul>
		</div>
	)
}

List.propTypes = {
	movies: PropTypes.array.isRequired,
}
export default List;